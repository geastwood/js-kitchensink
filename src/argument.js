// argument is array-like object, in its basic form, its key is number surrounded by quote
var f = function() {
    console.log(typeof arguments.shift);
    console.log(typeof arguments.push);
    console.log(typeof arguments);
    console.log(arguments);
    console.log(Array.prototype.slice.call(arguments));
};
console.log(f(['fei', 'liu', 'feiliu'], 'feiliu')); // log {'0': ['fei', 'liu', 'feiliu']}

// string is also array-like object
console.log(new String('Feiliu'));
