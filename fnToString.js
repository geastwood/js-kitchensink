var fnStr = (function(x) {
    return function(y) {
        return x + y;
    };
})(42).toString();
console.log(fnStr);
/*
var fn = function() {
    return 'inside a function body';
};
*/
