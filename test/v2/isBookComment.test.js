const test = require('tape')

const { isBookComment } = require('../../')

test('isBookComment / book schema', t => {

  const simpleBookComment = {
    type: 'bookclubComment',
    root: '%krfSQ45E12ugo7CyB+WPQx8NGar8AahcD6PcAm09Jow=.sha256',
    branch: '%krfSQ45E12ugo7CyB+WPQx8NGar8AahcD6PcAm09Jow=.sha256',
    text: 'Comment'
  }
  t.ok(isBookComment(simpleBookComment), 'validates simple book comment')

  const incompleteBookComment = {
    type: 'bookclubComment',
    root: '%krfSQ45E12ugo7CyB+WPQx8NGar8AahcD6PcAm09Jow=.sha256',
    text: 'Comment'
  }
  t.notOk(isBookComment(incompleteBookComment), 'invalidates incomplete book comment')
  t.equal(incompleteBookComment.errors[0].message, 'is required', 'provides error messages')

  t.end()
})
