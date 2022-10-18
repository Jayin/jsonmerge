const assert = require('assert')
const helper = require('./helper')
const jsonmerge = require('../jsonc')

exports.testJsonc = () => {
  let res = jsonmerge(['test/fixtures/jsonc/*.json'])
  assert.deepEqual(res, helper.apiExpected)
}

exports.testMultiplePatterns = () => {
  let res = jsonmerge(['test/fixtures/jsonc/a.json', 'test/fixtures/jsonc/{b,c}.json'])
  assert.deepEqual(res, helper.apiExpected)
}

exports.testEmptyInput = () => {
  let res = jsonmerge(['test/fixtures/nothing/*.json'])
  assert.deepEqual(res, {})
}

exports.testJson = () => {
  let res = jsonmerge(['test/fixtures/json/*.json'])
  assert.deepEqual(res, helper.apiExpected)
}
