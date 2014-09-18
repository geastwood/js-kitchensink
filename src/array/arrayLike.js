var makeArrayLike = function() {
    var al;

    al = Object.defineProperty({}, 'length', {
        get: function() {
            return Object.keys(this).length;
        }
    });
    return al;
};
var a1 = makeArrayLike();
console.assert(a1.length === 0, 'should fail');
a1.name = 'foo';
console.assert(a1.length === 1, 'should fail');
a1.type = 'object';
console.assert(a1.length === 2, 'should fail');
delete a1.type;
console.assert(a1.length === 1, 'should fail');
