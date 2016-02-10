# jsonmerge

## Install 

```shell
$ npm install -g jsonmerge
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
