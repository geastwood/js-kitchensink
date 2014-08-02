/* jshint evil:true */
var global = 'this is a global variable';

var directEval = function() {
    var local = 'this is a local variable';

    eval('var local = "local variable will be overwritten with direct eval"');
    eval('var global = "this create a local global variable"');
    eval('global = "global variable will be overwritten with direct eval"');
    return local;
};

var indirectEval = function() {
    var local = 'this is a local variable in indirectEval';
    (1, eval)('var local = "with indirectEval, expression is evaluated on global by default."');
    (1, eval)('var global = "with var keyword, global variable will be overwritten."');
    (1, eval)('var foo = {name: \'foo\'}');
    return local;
};

console.log(directEval());
console.log(global);

console.log(indirectEval());
console.log(local);
console.log('fei', global);
console.log(foo);

