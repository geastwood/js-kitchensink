var f = function() {
    // {me: 'better'} => this
    // if using call to bind custom object,
    // in activation object, the 'this' operator will be bind to custom object
    var that = this;
    return function() {
        console.log(that.me);
    };
};
global.me = 'global me';
var ff = f();
var o = {me: 'object me'};
ff();
var f1 = f.call(o);
f1();
