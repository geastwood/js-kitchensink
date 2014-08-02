var Person = function() {
    this.name = 'john doe';
};
Person.prototype.hi = function() {
    return 'Hey';
};
Object.defineProperty(Object.prototype, 'hey', {
    get: function() {
        return '34';
    },
    set: function(v) {
        console.log('setting a value', this, v);
    }
});

var p = new Person();
console.log('constructor', Person.prototype === Object.getPrototypeOf(p));
console.log('object1', Object.prototype === Object.getPrototypeOf({}));
for (var key in p) console.log(key);
console.log(p.hey);
p.hey = '45';
console.log(p.hey);
