#!/usr/bin/env node

'use strict'
const program = require('commander')
const pkg = require('../package.json')
const jsonmerge = require('../')

program
  .version(pkg.version)
  .arguments('[source...]')
  .description('merge the source json file to dest json file')
  .action(function (source, options) {
    let result = jsonmerge(source)
    console.log(JSON.stringify(result, null, 4))

  })
  .parse(process.argv)
