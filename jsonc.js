'use strict'

const jsonmerge = require('./')
const stripJsonComments = require('./strip-json-comments')
const stripJsonTrailingCommasPkg = require('strip-json-trailing-commas')
const _ = require('lodash')

const stripJsonTrailingCommas = stripJsonTrailingCommasPkg.default

module.exports = function (source, options) {
  let newOptions = _.assign({}, options, {
    transform: function (json_string) {
      // note: `jsonc.parse` cannot handle trailing commas
      // use `stripJsonComments + stripJsonTrailingCommas` instead
      json_string = stripJsonComments(json_string)
      return stripJsonTrailingCommas(json_string)
    }
  })
  return jsonmerge(source, newOptions)
}
