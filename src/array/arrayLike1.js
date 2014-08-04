var makeArrayLike = function() {
    var al;

    al = Object.defineProperty({}, 'length', {
        get: function() {
            var keys = Object.keys(this);
            return keys.length && Math.max.apply(null, keys) + 1;
        }
    });
    return al;
};

var a1 = makeArrayLike();
console.assert(a1.length === 0, 'should be 0');
a1['0'] = 'zero';
a1['1'] = 'first';
a1['100'] = 'hundred';
a1['name'] = 'foo';
//console.assert(a1.length === 101, 'should be 101');
console.log(Math.max.apply(null, ['1', '2', 'fei']));
