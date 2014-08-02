function isReallyNaN(obj) {
    return obj !== obj;
}
console.assert(isReallyNaN({name: 'foo'}) === false, 'object');
console.assert(isReallyNaN(29) === false, 'number');
console.assert(isReallyNaN(NaN) === true, 'NaN');
console.assert(isReallyNaN(/regex/m) === false, 'RegExp');
console.assert(isReallyNaN(function() { return 'fn'; }) === false, 'Function');
