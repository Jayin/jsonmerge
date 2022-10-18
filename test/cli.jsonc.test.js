const assert = require('assert')
const helper = require('./helper')

exports.testJsonc = function () {
  let res = helper.cli(['--jsonc', 'jsonc/*.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, helper.cliExpected)
}

exports.testMultiplePatterns = function () {
  let res = helper.cli(['--jsonc', 'jsonc/a.json', 'jsonc/{b,c}.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, helper.cliExpected)
}
exports.testEmptyInput = function () {
  let res = helper.cli(['--jsonc', 'nothing/*.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, '{}\n')
}

exports.testJson = function () {
  let res = helper.cli(['--jsonc', 'json/*.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, helper.cliExpected)
}
