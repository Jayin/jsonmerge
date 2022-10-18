const assert = require('assert')
const helper = require('./helper')

exports.testJson = () => {
  let res = helper.cli(['json/*.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, helper.cliExpected)
}

exports.testMultiplePatterns = () => {
  let res = helper.cli(['json/a.json', 'json/{b,c}.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, helper.cliExpected)
}

exports.testEmptyInput = () => {
  let res = helper.cli(['nothing/*.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, '{}\n')
}

exports.testJsonc = () => {
  let res = helper.cli(['jsonc/*.json'])
  assert.equal(res.stdout, '')
  assert.match(res.stderr, /SyntaxError: Unexpected token/)
}