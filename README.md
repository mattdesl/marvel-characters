# marvel-characters

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A list of all public comic book character names in the [Marvel universe](https://en.wikipedia.org/wiki/Marvel_Universe), sourced from the API.

**Total Characters:** 1,252  
**Last Updated:** Sunday, July 19th, 2015.

Data provided by Marvel. © 2015 Marvel

## Install

```sh
npm install marvel-characters [--g|--save]
```

## Example

```js
var marvel = require('marvel-characters')

// random character
console.log(marvel())
//=> 'Iron Man'

// all characters
console.log(marvel.characters)
//=> ["3-D Man", "A-Bomb", ..., "Zuras", "Zzzax"]
```

## Usage

[![NPM](https://nodei.co/npm/marvel-characters.png)](https://www.npmjs.com/package/marvel-characters)

### API

#### `name = marvel()`

Returns a random Marvel character name, like `"Spider-Man"`.

#### `list = marvel.characters`

The array of all character names.

#### `list = require('marvel-characters/characters.json')`

The required JSON array.

### CLI

You can also use the CLI here.

```
Usage:
  marvel-characters [opt]
  
Options:
  --help  show help
  --all   list all characters 
```

Example:

```sh
$ marvel-characters
Green Goblin
```

## Running From Source

Clone & install:

```sh
git clone https://github.com/mattdesl/marvel-characters.git
cd marvel-characters
npm install
```

You will need a Marvel Developer account. Once you have API keys, copy them into a `.marvel-charactersrc` file in the same directory. It should look like this, with your keys:

```json
{
  "privateKey": "egadg545151232d02ea0b9asdfasdfd5699a",
  "publicKey": "badsg1cbadsggagafdh0"
}
```

Then use `npm start` to scrape the new data.

## See Also

- [marvel-comics-api](https://github.com/mattdesl/marvel-comics-api)
- [marvel-comics-api-stream](https://github.com/mattdesl/marvel-comics-api-stream)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/marvel-characters/blob/master/LICENSE.md) for details.
