var isNumber = function(v) {
    return typeof v === 'number' && v === v++;
};
var complementary = function(fn) {
    return function() {
        return !fn.apply(null, Array.prototype.slice.call(arguments));
    };
};
