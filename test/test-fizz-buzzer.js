const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function() {
  it(`should return fizz if number is divisable by 3, buzz if divisable by 5,
     and fizz-buzz if divisable by both`, function() {
    const normalCases = [
         {a:3, expected: 'fizz'},
         {a:6, expected: 'fizz'},
         {a:9, expected: 'fizz'},
         {a:12, expected: 'fizz'},
         {a:5, expected: 'buzz'},
         {a:10, expected: 'buzz'},
         {a:15, expected: 'fizz-buzz'},
         {a:30, expected: 'fizz-buzz'},
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = [
      '3',
      '5',
      true,
      '15'
    ];
  });
});
