const definitions = require('ssb-schema-definitions')

module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ["type", "text", "root", "branch"],
  properties: {
    type: {type: 'string', pattern: '^bookclubComment$'},
    text: {type: 'string'},
    root: { $ref: '#/definitions/messageId' }, // a book update (rating)
    branch: { $ref: '#/definitions/messageId' } // previous message in thread, helper in scuttle-book takes care of this for you
  },
  definitions: definitions
}
