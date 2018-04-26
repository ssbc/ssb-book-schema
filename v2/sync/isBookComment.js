const Validator = require('is-my-json-valid')
const schema = require('../schema/bookComment')
const validator = Validator(schema, {verbose: true})
const getMsgContent = require('ssb-msg-content')

module.exports = function isBookComment (obj) {
  const result = validator(getMsgContent(obj))

  // exposes error messages provided by is-my-json-valid
  isBookComment.errors = validator.errors

  return result
}
