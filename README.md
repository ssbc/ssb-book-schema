# Repository of schemas for scuttle-book

This repository contains the schemas used by scuttle-book. Both the
schema used in [patch-book](https://github.com/arj03/patch-book) (v1)
and [scuttle-book](https://github.com/arj03/scuttle-book) (v2).

## Differences between v1 and v2

Subjective attributes: review, rating, ratingMax, ratingType, shelves,
genres have been added to the book structure directly so that they can
be used right away.

Futhermore:
- author can be an array
- image can be an array
- shelves can be an array
- genres can be an array

About type is no longer used. Instead `bookclubUpdate` is
used. Similarly for comments where `bookclubComment` is used instead
of `post`.
