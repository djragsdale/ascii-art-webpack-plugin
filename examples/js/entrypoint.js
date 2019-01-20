const addon = require('./additionalScript')

module.exports = class MyClass {
  inheritedMethod() {
    addon()
  }

  uniqueMethod() {
    console.log('calling unique method')
  }
}
