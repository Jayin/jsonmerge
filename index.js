'use strict'

const fs = require('fs')
const _ = require('lodash')
const glob = require('glob')

module.exports = function (source, options) {
  options = options || {}

  let result = {}
  if (source && source.length >= 1) {

    let jsonFiles = []

    source.forEach(function (pattern) {
      jsonFiles = _.concat(jsonFiles, glob.sync(pattern))
    })

    jsonFiles.forEach(function (json_file) {
      let json_string = fs.readFileSync(json_file, {encoding: 'utf-8'})
      if (options.transform) {
        json_string = options.transform(json_string)
      }
      result = _.merge(result, JSON.parse(json_string))
    })
  }
  return result
}
