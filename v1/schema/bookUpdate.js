module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    type: {type: 'string', pattern: '^about$'},
    about: {type: 'string'},

    review: {type: 'string'},
    rating: {type: 'string'},
    ratingMax: {type: 'string'},
    ratingType: {type: 'string'},
    shelve: {type: 'string'},
    genre: {type: 'string'}
  },
  required: ["type", "about"]
}

