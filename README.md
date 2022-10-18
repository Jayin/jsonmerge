# jsonmerge [![v](https://img.shields.io/npm/v/jsonmerge.svg)](https://www.npmjs.com/package/jsonmerge) [![dm](https://img.shields.io/npm/dm/jsonmerge.svg)](https://www.npmjs.com/package/jsonmerge)

## Install 

```shell
# with cli
$ npm install -g jsonmerge

# dependency in your project
$ npm install --save jsonmerge
```

## Usage

### API

```javascript
const jsonmerge = require('jsonmerge')

let result = jsonmerge(['./test/fixtures/json/*.json'])
console.log(JSON.stringify(result, null, 4))
```

### CLI

```shell
$ cd test/fixtures
$ jsonmerge json/*.json > result.json
```

## License 

Apache v2.0 © [Jayin Ton](https://github.com/Jayin)
