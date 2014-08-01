var CustomObj = function() {};
CustomObj.prototype.count = function() {
    var count = 0;
    for (var item in this) {
        if (this.hasOwnProperty(item)) {
            count++;
        }
    }
    return count;
};
var c = new CustomObj();
c.foo = 'foo';
c.bar = 'bar';
c.fb = 'fb';

console.log(c.count());
