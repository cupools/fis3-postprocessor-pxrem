'use strict'

var pxrem = require('pxrem')
var assign = require('lodash.assign')

var defaultOptions = {
  root: 75,
  filter: null,
  fixed: 6,
  keepPx: false,
  commentFilter: 'no'
}

module.exports = function(content, file, conf) {
  var options = assign({}, defaultOptions, conf)
  return pxrem(content, options)
}
