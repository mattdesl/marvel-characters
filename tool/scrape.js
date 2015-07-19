var conf = require('rc')('marvel-characters')
var api = require('marvel-comics-api-stream')
var fs = require('fs')
var path = require('path')
var clean = require('./clean')
var date = require('dateformat')
var list = []
var comma = require('comma-number')

api('characters', {
  privateKey: conf.privateKey,
  publicKey: conf.publicKey,
  query: {
    limit: 100
  }
}).on('data', function (character) {
  console.log(character.name)
  list.push(character.name)
}).on('end', function () {
  var file = path.resolve(__dirname, '..', 'characters.json')
  list = clean(list)

  console.log("Writing to file: %s", file)
  console.log("**Total Characters:** %d", comma(list.length))
  console.log("**Last Updated:** %s.", date(new Date(), 'dddd, mmmm dS, yyyy'))
  fs.writeFile(file, JSON.stringify(list, null, 2), function (err) {
    if (err) throw err
  })
})