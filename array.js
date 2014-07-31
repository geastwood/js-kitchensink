var a = ['one', 'two', 'three'];

var clone = a.slice();
a.splice(1, 0, 'four');
console.log(a);
console.log(clone);
