const isUndefined = obj => typeof obj === 'undefined'

const assertArray = (arr, name, required = true) => {
  if (!required && isUndefined(arr)) return

  if (!Array.isArray(arr)) {
    throw new Error(`Option "${name}" must be of type array`)
  }
}

const assertString = (str, name, required = true) => {
  if (!required && isUndefined(str)) return

  if (typeof str !== 'string') {
    throw new Error(`Option "${name}" must be of type string`)
  }
}

const assertArrayOfStrings = (arr, name, required = true) => {
  if (!required && isUndefined(arr)) return

  assertArray(arr, name)
  arr.forEach((prop, idx) => {
    try {
      assertString(prop, `${name}[${idx}]`)
    } catch (err) {
      throw new Error(`Option "${name}" must be an array of strings`)
    }
  })
}

module.exports = {
  assertArray,
  assertArrayOfStrings,
  assertString,
}
