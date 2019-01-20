const addBorder = require('./addBorder')
const {
  assertString,
  assertArrayOfStrings,
} = require('./asserts')
const transformText = require('./transformText')
const validateOptionsFactory = require('./validateOptionsFactory')

// Allow optional border
// Allow comment style options
// List outputs or extensions to add in (with defaults)

const defaultOptions = {
  font: 'Standard',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  borderAroundText: false,
  extensions: ['js'],
}

const requiredOptions = ['text']
const validateOptions = validateOptionsFactory(requiredOptions)

module.exports = class AsciiArtWebpackPlugin {
  // TODO: Add jsdoc constructor definition
  constructor(options) {
    validateOptions(options)

    assertString(options.text, 'text')
    assertString(options.font, 'font', false)
    assertString(options.horizontalLayout, 'horizontalLayout', false)
    assertString(options.verticalLayout, 'verticalLayout', false)
    assertArrayOfStrings(options.extensions, 'extensions', false)

    this.text = options.text
    delete options.text

    this.options = {
      ...defaultOptions,
      ...options,
    }
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('AsciiArtWebpackPlugin', (compilation, callback) => {
      const filesToTransform = Object.keys(compilation.assets).filter(filename => this.endsWithExtension(filename))

      Promise.all(filesToTransform.map((filename) => {
        const source = compilation.assets[filename].source()

        const transformedSource = this.transform(source)

        compilation.assets[filename] = {
          source: () => transformedSource,
          size: () => transformedSource.length,
        }
      }))
      .then(() => {
        callback()
      })
      .catch((err) => {
        console.log('AsciiArtWebpackPlugin error', err)
        callback()
      })
    })
  }

  endsWithExtension(filename) {
    return this.options.extensions.reduce((acc, extension) => acc || filename.endsWith(extension), false)
  }

  generateHeader(commentStyle = 'js') {
    // Only does javascript comments for now
    const transformedText = transformText(this.text, this.options)

    if (this.options.borderAroundText) {
      return addBorder(commentStyle, transformedText)
    }

    const openComment = '/*'
    const closeComment = '*/'

    return `${openComment}\n${transformedText}\n${closeComment}`
  }

  transform(source) {
    // Get the header
    const header = this.generateHeader()

    // return the new file with the header appended
    return `${header}\n${source}`
  }
}
