const CleanCss = require('clean-css')
const path = require('path')

const fs = require('fs')

const input = path.resolve('src', 'static', 'public', 'styles')

const output = path.resolve('src', 'static', 'public', 'css')
if (!fs.existsSync(output)) {
  fs.mkdirSync(output)
}

const global = path.resolve(input, 'global.css')
const globalOutput = path.resolve(output, 'global.css')

const prism = path.resolve(input, 'prism.css')
const prismOutput = path.resolve(output, 'prism.css')

const globalMinifiedOutput = new CleanCss({
  level: { 1: { all: true }, 2: { all: true } }
}).minify([global])

fs.writeFileSync(globalOutput, globalMinifiedOutput.styles)

const prismMinifiedOutput = new CleanCss({
  level: { 1: { all: true }, 2: { all: true } }
}).minify([prism])

fs.writeFileSync(prismOutput, prismMinifiedOutput.styles)
