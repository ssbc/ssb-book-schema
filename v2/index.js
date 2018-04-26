var nest = require('depnest')

module.exports = {
  gives: nest({
    'book': [
      'isBook',
      'isBookUpdate',
      'isBookComment'
    ],
    'version': [
      'string'
    ]
  }),
  create: function (api) {
    return nest({
      book: {
        isBook: require('./sync/isBook'),
        isBookUpdate: require('./sync/isBookUpdate'),
        isBookComment: require('./sync/isBookComment')
      },
      version: {
        string: versionString
      }
    })

    function versionString (versions) {
      versions.V1_SCHEMA_VERSION_STRING = 'v2'
      return versions
    }
  }
}
