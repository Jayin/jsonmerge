'use strict'

const fs = require('fs')
const _ = require('lodash')
const glob = require('glob')

module.exports = function (source) {
  let result = {}
  if (source && source.length >= 1) {
    
    let jsonFiles = []

    source.forEach(function (pattern) {
      jsonFiles = _.concat(jsonFiles, glob.sync(pattern))
    })

    jsonFiles.forEach(function (json_file) {
      let json_string = fs.readFileSync(json_file, {encoding: 'utf-8'})
      result = _.merge(result, JSON.parse(json_string))
    })
  }
  return result
} 
