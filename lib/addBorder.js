module.exports = (commentStyle, headerText) => {
  const transformedTextLines = headerText.split('\n')

  // All lines should be the same length, but this should handle if they're not
  const lineLength = Math.max(...transformedTextLines.map(line => line.length))
  let headerLines = []
  if (commentStyle === 'js') {
    headerLines = [`/${'*'.repeat(lineLength + 5)} `]

    transformedTextLines.forEach((line) => {
      headerLines.push(` * ${line}  * `)
    })

    headerLines.push(` ${'*'.repeat(lineLength + 5)}/`)
  }

  return headerLines.join('\n')
}
