var uniqueRandomArray = require('unique-random-array')
var characters = require('./characters.json')

module.exports = uniqueRandomArray(characters)
module.exports.characters = characters