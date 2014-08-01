var global = (function() {
    'use strict';
    return new Function('return this;')();
}());
var global1 = (function() {
    'use strict';
    return (1, eval)('this');
}());
var global2 = (function() {
    'use strict'; // become indirect eval, which evaluate globally
    return eval('this');
}());
var global3 = (function() {
    'use strict';
    var e = eval;
    return e('this');
}());
console.log(global2);
