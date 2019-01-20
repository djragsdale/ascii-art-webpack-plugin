const figlet = require('figlet')

module.exports = (text, options) => figlet.textSync(text, {
  font: options.font,
  horizontalLayout: options.horizontalLayout,
  verticalLayout: options.verticalLayout,
})