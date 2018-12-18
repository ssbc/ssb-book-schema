const test = require('tape')

const { isBookUpdate } = require('../../')

test('isBookUpdate / book schema', t => {

  const simpleBookUpdate = {
    type: 'bookclubUpdate',
    updates: '%krfSQ45E12ugo7CyB+WPQx8NGar8AahcD6PcAm09Jow=.sha256',
    authors: 'Ursula le Guin',
    title: 'The Dispossessed'
  }
  t.ok(isBookUpdate(simpleBookUpdate), 'validates simple book update')

  const incompleteBookUpdate = {
    type: 'bookclubUpdate',
    authors: 'Ursula le Guin',
    title: 'The Dispossessed'
  }
  t.notOk(isBookUpdate(incompleteBookUpdate), 'invalidates incomplete book update')
  t.equal(incompleteBookUpdate.errors[0].message, 'is required', 'provides error messages')

  const simpleBookReview = {
    type: 'bookclubUpdate',
    updates: '%krfSQ45E12ugo7CyB+WPQx8NGar8AahcD6PcAm09Jow=.sha256',
    review: 'Long thoughtful words',
    rating: '5'
  }
  t.ok(isBookUpdate(simpleBookReview), 'validates simple book')

  t.end()
})

