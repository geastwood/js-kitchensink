var a = ['one', 'two', 'four'];
var clone = a.slice();
a.splice(3, 0, 'three');
console.log(clone);
console.log(a);
console.log(a.splice(1, 1));
console.log(a.splice(1, 0));
