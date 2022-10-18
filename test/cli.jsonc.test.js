const assert = require('assert')
const helper = require('./helper')

exports.testJsonc = () => {
  let res = helper.cli(['--jsonc', 'jsonc/*.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, helper.cliExpected)
}

exports.testMultiplePatterns = () => {
  let res = helper.cli(['--jsonc', 'jsonc/a.json', 'jsonc/{b,c}.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, helper.cliExpected)
}
exports.testEmptyInput = () => {
  let res = helper.cli(['--jsonc', 'nothing/*.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, '{}\n')
}

exports.testJson = () => {
  let res = helper.cli(['--jsonc', 'json/*.json'])
  assert.equal(res.stderr, '')
  assert.equal(res.stdout, helper.cliExpected)
}
