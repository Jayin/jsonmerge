const cp = require('child_process')
const fs = require('fs')
const path = require('path')

const cwd = path.join(__dirname, 'fixtures')
const cliExpected = fs.readFileSync(path.join(cwd, 'result.json'), 'utf8')
const apiExpected = require('./fixtures/result.json')

exports.cli = function (args) {
  let bin = path.join(__dirname, '../bin/jsonmerge.js')
  return cp.spawnSync(bin, args, { cwd: cwd, encoding: 'utf8' })
}
exports.cliExpected = cliExpected
exports.apiExpected = apiExpected
