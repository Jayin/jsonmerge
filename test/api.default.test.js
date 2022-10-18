const assert = require('assert')
const helper = require('./helper')
const jsonmerge = require('..')

exports.testJson = function () {
  let res = jsonmerge(['test/fixtures/json/*.json'])
  assert.deepEqual(res, helper.apiExpected)
}

exports.testMultiplePatterns = function () {
  let res = jsonmerge(['test/fixtures/json/a.json', 'test/fixtures/json/{b,c}.json'])
  assert.deepEqual(res, helper.apiExpected)
}

exports.testEmptyInput = function () {
  let res = jsonmerge(['test/fixtures/nothing/*.json'])
  assert.deepEqual(res, {})
}

exports.testJsonc = function () {
  assert.throws(function () {
    jsonmerge(['test/fixtures/jsonc/*.json'])
  }, /SyntaxError: Unexpected token/)
}
