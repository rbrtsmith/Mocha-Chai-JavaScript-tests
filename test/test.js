var chai = require('chai');
var assert = require('chai').assert;
var app = require('../src/index.js');
var solutions = require('../src/crock-solutions.js');


describe('Sanitize', function() {
    it('returns lowercase of a string', function() {
        var input = 'HELLO WORLD';
        var output = app.sanitize(input);
        assert.strictEqual(output, 'hello world');
    });
    it('removes any hyphen', function() {
        var input = 'hello-world';
        var output = app.sanitize(input);
        assert.strictEqual(output, 'hello world');
    });
    it('removes any numbers', function() {
        var input = 'hello world888';
        var output = app.sanitize(input);
        assert.strictEqual(output, 'hello world');
    });
});

describe('Fibonacci', function() {
    it('returns the fibonacci sequence as an array', function() {
        var output = app.fibonacci(9);
        assert.deepEqual(output, [1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});

describe('DoubleAll', function() {
    it('returns an array with all the values doubled', function() {
        var input = [1,2,3,4,5,6];
        var output = app.doubleAll(input);
        assert.deepEqual(output, [2,4,6,8,10,12]);
    });
});

describe('Doug Crockford tests', function() {
    it('Write a function that takes an argument and returns that argument.', function() {
        assert.strictEqual(solutions.q1('foo'), 'foo');
    });

    it('Write two binary functions, add and mul, that take two numbers and return their sum and product.', function() {
        assert.strictEqual(solutions.add(2,4), 6);
        assert.strictEqual(solutions.mul(2,4), 8);
    });

    it('Write a function that takes an argument and returns a function that returns that argument', function() {
        assert.strictEqual(solutions.q3('foo')(), 'foo');
    });

    it('Write a function that adds from two invocations.', function() {
        assert.strictEqual(solutions.q4(4)(6), 10);
    });

    it('Write a function that takes a binary function, and makes it callable with two invocations.', function() {
        var testFn = function(x,y) {
            return x + y;
        };
        assert.strictEqual(solutions.q5(testFn)(4)(6), 10);
    });

    it('Write a function that takes a function and an argument and returns a function that can supply a second argument.', function() {
        var testFn = function(x,y) {
            return x + y;
        };
        assert.strictEqual(solutions.q6(testFn, 2)(3), 5);
    });

    describe('Without writing any new functions, show three ways to create the `inc` function, using functions created on the previous six problems.', function() {
        var add = solutions.add;
        var apply = solutions.q5;
        var curry = solutions.q6;
        it('Answer1', function() {
            assert.strictEqual(add(1,2), 3);
        });
        it('Answer2', function() {
            assert.strictEqual(apply(add)(4)(6), 10);
        });
        it('Answer3', function() {
            assert.strictEqual(curry(add,4)(7), 11);
        });
    });

    it('Write a function twice that takes a binary function and returns a unary function, that passes it\'s argument to the binary function twice.', function() {
        var testFn = function(x,y) {
            return x + y;
        };
        assert.strictEqual(solutions.twice(testFn)(4), 8);
    });

    it('Write a function composeu that takes two unary functions and returns a unary function that calls them both.', function() {
        var testFn1 = function(x) {
            return x * 2;
        };
        var testFn2 = function(x) {
            return x * 4;
        };
        assert.strictEqual(solutions.composeu(testFn1, testFn2)(2), 16);
    });

    it('Write a function composeb thst takes two binary functions and returns a function that calls them both.', function() {
        var testFn1 = function(x,y) {
            return x + y;
        };
        var testFn2 = function(x,y) {
            return x * y;
        };
        assert.strictEqual(solutions.composeb(testFn1, testFn2)(2, 4, 6), 26);
    });

});


/*

 

 
 Write a function that allows another function to be only called once.
 Write a factory function that returns two functions that implement an up/down counter.
 Make a revocable function that takes a nice function and returns a revoke function that denies access to the nice function, and an invoke function that can invoke the nice function until it is revoked.
 */
