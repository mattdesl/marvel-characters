var uniq = require('uniq')

var natural = require('javascript-natural-sort')

module.exports = function (list) {
  natural.insensitive = true
  return uniq(list.map(function (str) {
    return str.replace(/(.*)\s+\(.*\)/, '$1')
  })).sort(natural)
}