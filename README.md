# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @vineetp/lotide`

**Require it:**

`const _ = require('@vineetp/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `tail(array)`: Returns the first element of an array.
- `head(array)`: Returns all the elements of the array other than the first element.
- `middle(array)`: Returns the array element or elements of an array located at the middle-most position.
