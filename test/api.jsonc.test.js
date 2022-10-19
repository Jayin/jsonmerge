const assert = require('assert')
const helper = require('./helper')
const jsonmerge = require('../jsonc')

exports.testJsonc = function () {
  let res = jsonmerge(['test/fixtures/jsonc/*.json'])
  assert.deepEqual(res, helper.apiExpected)
}

exports.testMultiplePatterns = function () {
  let res = jsonmerge(['test/fixtures/jsonc/a.json', 'test/fixtures/jsonc/{b,c}.json'])
  assert.deepEqual(res, helper.apiExpected)
}

exports.testEmptyInput = function () {
  let res = jsonmerge(['test/fixtures/nothing/*.json'])
  assert.deepEqual(res, {})
}

exports.testJson = function () {
  let res = jsonmerge(['test/fixtures/json/*.json'])
  assert.deepEqual(res, helper.apiExpected)
}
