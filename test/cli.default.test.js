const assert = require('assert')
const helper = require('./helper')

exports.testJson = function () {
  let res = helper.cli(['json/*.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, helper.cliExpected)
}

exports.testMultiplePatterns = function () {
  let res = helper.cli(['json/a.json', 'json/{b,c}.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, helper.cliExpected)
}

exports.testEmptyInput = function () {
  let res = helper.cli(['nothing/*.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, '{}\n')
}

exports.testJsonc = function () {
  let res = helper.cli(['jsonc/*.json'])
  assert.ok(res.error)
  assert.match(res.error.message, /SyntaxError: Unexpected token/)
  assert.match(res.stderr, /SyntaxError: Unexpected token/)
  assert.equal(res.stdout, '')
}
