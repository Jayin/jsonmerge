
# jsonmerge [![v](https://img.shields.io/npm/v/jsonmerge.svg)](https://www.npmjs.com/package/jsonmerge) [![dm](https://img.shields.io/npm/dm/jsonmerge.svg)](https://www.npmjs.com/package/jsonmerge) [![cov](https://Jayin.github.io/jsonmerge/badges/coverage.svg)](https://github.com/Jayin/jsonmerge/actions/workflows/unit-test.yml) [![unit](https://github.com/Jayin/jsonmerge/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Jayin/jsonmerge/actions/workflows/unit-test.yml) [![e2e](https://github.com/Jayin/jsonmerge/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Jayin/jsonmerge/actions/workflows/e2e-test.yml)

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

// or with jsonc support
const jsonmerge = require('jsonmerge/jsonc')
let result = jsonmerge(['./test/fixtures/jsonc/*.json'])

console.log(JSON.stringify(result, null, 4))
```

### CLI

```shell
$ cd test/fixtures
$ jsonmerge json/*.json > result.json

# or with jsonc support
$ jsonmerge --jsonc jsonc/*.json > result.json
```

## Compatibility

| os  | Windows | Ubuntu | MacOS |
|:---:|:---:|:---:|:---:|
| supported | ✅ | ✅ | ✅ |

| node    | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| json    | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| jsonc   | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

See also: [.github/workflows/](https://github.com/Jayin/jsonmerge/blob/master/.github/workflows/)

## License 

Apache v2.0 © [Jayin Ton](https://github.com/Jayin)
