'use strict';
const should = require('chai').should();

const fizzBuzz = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it(`print out fizz if divisable by 3, buzz if divisable by 5
  and fizz-buzz if divisiable by both`, function() {
    const normalCases = [
      {a:3, expected: 'fizz'},
      {a:6, expected: 'fizz'},
      {a:9, expected: 'fizz'},
      {a:12, expected: 'fizz'},
      {a:5, expected: 'buzz'},
      {a:10, expected: 'buzz'},
      {a:20, expected: 'buzz'},
      {a:15, expected: 'fizz-buzz'},
      {a:30, expected: 'fizz-buzz'},
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzz(input.a);
      answer.should.equal(input.expected);
    });
  });
});

it('should raise error if args not numbers', function() {
  const badInputs = [
    '3',
    '1',
    false
  ];
  badInputs.forEach(function(input) {
    (function() {
      fizzBuzz(input[0]);
    }).should.throw(Error);
  });
});
