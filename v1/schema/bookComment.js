module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    type: {type: 'string', pattern: '^post$'},
    text: {type: 'string'},
    root: {type: 'string'}, // a book update (rating)
    branch: {type: 'string'} // previous message in thread
  },
  required: ["type", "text", "root", "branch"]
}

