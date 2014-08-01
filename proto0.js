// without Object.defineProperty and enumerable: false
var names = {
    foo: 'foo',
    bar: 'bar',
    fb: 'fb'
};

Object.prototype.hi = function() {
    return 'hi';
};

var i = 0;

for (var name in names) {
    i++;
}
console.log(i);
