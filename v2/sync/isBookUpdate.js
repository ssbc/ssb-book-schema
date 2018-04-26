const Validator = require('is-my-json-valid')
const schema = require('../schema/bookUpdate')
const validator = Validator(schema, {verbose: true})
const getMsgContent = require('ssb-msg-content')

module.exports = function isBookUpdate (obj) {
  const result = validator(getMsgContent(obj))

  // exposes error messages provided by is-my-json-valid
  isBookUpdate.errors = validator.errors

  return result
}
