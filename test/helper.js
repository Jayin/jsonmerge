const cjsExecaPkg = require('@cjs-mifi-test/execa')
const fs = require('fs')
const path = require('path')

const cwd = path.join(__dirname, 'fixtures')
const apiExpected = require('./fixtures/result.json')
let cliExpected = fs.readFileSync(path.join(cwd, 'result.json'), 'utf8')

// unify eol for testing
if (process.platform === 'win32') {
  cliExpected = cliExpected.replace(/\r\n/g, '\n')
}

// keep the similar behavior with `child_process.spawnSync` for testing
// while fixing windows issues with `execa`
exports.cli = function (args) {
  let bin = path.join(__dirname, '../bin/jsonmerge.js')
  try {
    return cjsExecaPkg.execaSync(bin, args, {
      cwd: cwd,
      encoding: 'utf8',
      stripFinalNewline: false
    })
  } catch (err) {
    return {
      stdout: err.stdout,
      stderr: err.stderr,
      error: err
    }
  }
}
exports.cliExpected = cliExpected
exports.apiExpected = apiExpected
