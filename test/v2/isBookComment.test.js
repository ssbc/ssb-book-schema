const test = require('tape')

const { isBookComment } = require('../../')

test('isBookComment / book schema', t => {

  const simpleBookComment = {
    type: 'bookclubComment',
    root: 'someid',
    branch: 'someid',
    text: 'Comment'
  }
  t.ok(isBookComment(simpleBookComment), 'validates simple book comment')

  const incompleteBookComment = {
    type: 'bookclubComment',
    root: 'someid',
    text: 'Comment'
  }
  t.notOk(isBookComment(incompleteBookComment), 'invalidates incomplete book comment')
  t.equal(incompleteBookComment.errors[0].message, 'is required', 'provides error messages')

  t.end()
})
