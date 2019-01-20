# ASCII Art Webpack Plugin

## Description
The ASCII Art Webpack Plugin 

## Installation
```bash
npm install --save-dev ascii-art-webpack-plugin
```
or shorthand
```bash
npm i -D ascii-art-webpack-plugin
```

## Usage
```javascript
const { AsciiArtWebpackPlugin } = require('ascii-art-webpack-plugin');

const webpackConfig = {
  // ... config settings here ...
  plugins: [
    new AsciiArtWebpackPlugin({
      text: 'Company Name',
      font: 'Big Money-se',
    }),
  ],
};
```

### Options

* text - Required. The text that will be converted into ASCII art
* font - Defaults to `'Standard'`. See below for recommended fonts. Supports all Figlet fonts
* horizontalLayout - Defaults to `'default'`. Available values: `['default', 'fitted', 'full']`. Figlet layout setting. Affects horizontal kerning values
* verticalLayout - Defaults to `'default'`. Available values: `['default', 'fitted', 'full']`. Figlet layout setting. Affects vertical kerning values
* borderAroundText - Defaults to `false`. Whether the header will have a border around it
* extensions - Defaults to `['js']`. What extensions of output files will get the ASCII art header

### Fonts
The `ascii-art-webpack-plugin` supports all Figlet fonts. The default is 'Standard'. I highly recommend trying out the following:

* Standard
* 3D-ASCII
* Alligator
* AMC Thin
* ANSI Shadow
* Banner3-D
* Big Money-se
* Broadway
* Crawford2
* Cursive
* Dancing Font
* Doh
* DOS Rebel
* Electronic
* Epic
* Fraktur
* Larry 3D 2
* Nancyj-Underlined
* NV Script
* Patorjk-HeX
* Reverse
* Script
* Slant Relief
* Soft
* Sweet
* Univers
