var isNumber = function(v) {
    return typeof v === 'number' && v === v++;
};
var complementary = function(fn) {
    return function() {
        return !fn.apply(null, Array.prototype.slice.call(arguments));
    };
};
console.log(isNumber(5));
console.log(isNumber('5'));
console.log(isNumber(NaN));
var isNotNumber = complementary(isNumber);
console.log(isNotNumber(NaN));
console.log(isNotNumber('Object is not a Number: ', {name: 'foo'}));
console.log(isNotNumber('Function is not Number: ', function() {}));
console.log(isNotNumber('Regular Expression is not a Number', /reg/m ));
