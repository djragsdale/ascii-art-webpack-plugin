module.exports = requiredOptions => (options) => {
  // TODO: Validate option types
  requiredOptions.forEach((prop) => {
    if (typeof options[prop] === 'undefined') {
      throw new Error(`AsciiArtWebpackPlugin: missing required option "${prop}"`)
    }
  })
}
