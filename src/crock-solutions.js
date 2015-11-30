var blanket = require('blanket');


//takes an argument and returns that argument.
exports.q1 = function(x) {
    return x;
};

//Write two binary functions, add and mul, that take two numbers and return their sum and product.
exports.add = function(x,y) {
    return x + y;
}
//Write two binary functions, add and mul, that take two numbers and return their sum and product.
exports.mul = function(x,y) {
    return x * y;
};

//Write a function that takes an argument and returns a function that returns that argument
exports.q3 = function(x) {
    return function() {
        return x;
    };
};

//Write a function that adds from two invocations.
exports.q4 = function(x) {
    return function(y) {
        return x + y;
    };
};

//Write a function that takes a binary function, and makes it callable with two invocations.
exports.q5 = function(fn) {
    return function(x) {
        return function(y) {
            return fn(x,y);
        };
    };
};

//Write a function that takes a function and an argument and returns a function that can supply a second argument.
exports.q6 = function(fn, x) {
    return function(y) {
        return fn(x,y);
    };
};

//Write a function twice that takes a binary function and returns a unary function, that passes it\'s argument to the binary function twice.
exports.twice = function(fn) {
    return function(x) {
        return fn(x,x);
    };
};

// Write a function composeu that takes two unary functions and returns a unary function that calls them both
exports.composeu = function(fn1, fn2) {
    return function(x) {
        return fn1(fn2(x));
    };
};

//Write a function composeb thst takes two binary functions and returns a function that calls them both.
exports.composeb = function(fn1, fn2) {
    return function(x, y, z) {
        return fn1(x, fn2(y, z));
    };
};


