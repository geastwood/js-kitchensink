(function() {
    var nostrict = function(x) {
        arguments[0] = 'modified';
        console.log('arguments[0] =', arguments[0]);
        console.log('x=', arguments[0]);
        console.log('under non-strict mode,', x === arguments[0]);
    };
    var strict = function(x) {
        'use strict';
        arguments[0] = 'modified';
        console.log('arguments[0] =', arguments[0]);
        console.log('x=', arguments[0]);
        console.log('under strict mode', x === arguments[0]);
    };
    nostrict('unmodified');
    strict('unmodified');
})();
