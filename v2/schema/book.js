module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ['type', 'title', 'authors'],
  properties: {
    type: {type: 'string', pattern: '^bookclub$'},
    title: {type: 'string'},
    authors: {
      oneOf: [
        {type: 'string'},
        {type: 'array', items: {allOf: [{type: 'string'}]
        }}
      ]
    },
    series: {type: 'string'},
    seriesNo: {
      oneOf: [
        {type: 'string'},
        {type: 'number'}
      ]
    },
    description: {type: 'string'},
    images: {
      oneOf: [
        {type: 'object'},
        {type: 'array', items: {allOf: [{type: 'object'}] }}
      ]
    },
    genres: {
      oneOf: [
        {type: 'string'},
        {type: 'array', items: {allOf: [{type: 'string'}] }}
      ]
    },
    pages: {
      oneOf: [
        {type: 'string'},
        {type: 'number'}
      ]
    },

    review: {type: 'string'},
    rating: {type: 'string'},
    ratingMax: {type: 'string'},
    ratingType: {type: 'string'},
    shelves: {
      oneOf: [
        {type: 'string'},
        {type: 'array', items: {allOf: [{type: 'string'}] }}
      ]
    }
  }
}
