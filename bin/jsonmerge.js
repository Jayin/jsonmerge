#!/usr/bin/env node

'use strict'
const program = require('commander')
const pkg = require('../package.json')

program
  .version(pkg.version)
  .arguments('[source...]')
  .option('--jsonc', 'enable parseing with jsonc syntax')
  .description('merge the source json file to dest json file')
  .action(function (source, options) {

    // picking up the right module dynamically
    // to avoid unnecessary dependencies loading
    let jsonmerge = options.jsonc ? require('../jsonc.js') : require('../')

    let result = jsonmerge(source)
    console.log(JSON.stringify(result, null, 4))

  })
  .parse(process.argv)
