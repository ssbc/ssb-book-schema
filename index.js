var combine = require('depject')
var {first, reduce} = require('depject/apply')

var v1 = require('./v1/')
var v2 = require('./v2/')

var sockets = combine([v2, v1])

var isBook = first(sockets.book.isBook, 'book.isBook')
var isBookUpdate = first(sockets.book.isBookUpdate, 'book.isBookUpdate')
var isBookComment = first(sockets.book.isBookComment, 'book.isBookComment')

module.exports = {
  isBook,
  isBookUpdate,
  isBookComment,
  
  sockets,
  schema: [
    v1, v2
  ]
}
