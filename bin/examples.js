#!/usr/bin/env node

const figlet = require('figlet')

const defaultOptions = {
  font: 'Standard',
  horizontalLayout: 'default', // ['default', 'fitted', 'full']
  verticalLayout: 'default', // ['default', 'fitted', 'full']
}

const recommendedFonts = [
  'Standard',
  '3D-ASCII',
  'Alligator',
  'AMC Thin',
  'ANSI Shadow',
  'Banner3-D',
  'Big Money-se',
  'Broadway',
  'Crawford2',
  'Cursive',
  'Dancing Font',
  'Doh',
  'DOS Rebel',
  'Electronic',
  'Epic',
  'Fraktur',
  'Larry 3D 2',
  'Nancyj-Underlined',
  'NV Script',
  'Patorjk-HeX',
  'Reverse',
  'Script',
  'Slant Relief',
  'Soft',
  'Sweet',
  'Univers',
]

recommendedFonts.forEach((fontName) => {
  console.log('font', fontName)
  console.log(figlet.textSync('Hello, world!', {
    ...defaultOptions,
    font: fontName,
  }))
})
