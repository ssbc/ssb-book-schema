const definitions = require('ssb-schema-definitions')

module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ["type", "updates"],
  properties: {
    type: {type: 'string', pattern: '^bookclubUpdate$'},
    updates: { $ref: '#/definitions/messageId' }

    // plus all of books optional properties
  },
  definitions: definitions
}

