
// #1
/*
function() {}.call(this);
function() {}.bind(this);
forEach(fn, this);
*/
var context = {name: 'foo'};
(function() {console.log('from call', this.name)}).call(context);
(function() {console.log('from bind', this.name)}).bind(context)();
