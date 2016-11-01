'use strict'

var pxrem = require('pxrem')
var assign = require('lodash.assign')

var defaultOptions = {
  remUnit: 75,
  threeVersion: false,
  remVersion: true,
  baseDpr: 2,
  remPrecision: 6
}

module.exports = function(content, file, conf) {
  var options = assign({}, defaultOptions, conf)
  return pxrem(content, options)
}
