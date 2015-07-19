#!/usr/bin/env node
var marvel = require('./')
var path = require('path')
var argv = require('minimist')(process.argv.slice(2), {
  alias: { help: 'h' }
})

if (argv.help) {
  require('fs')
    .createReadStream(path.join(__dirname, 'help.txt'))
    .pipe(process.stdout)
} else {
  console.log(argv.all ? marvel.characters.join('\n') : marvel())
}
