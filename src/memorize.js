var isPrime = function(num) {

    var prime = num != 1;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    
    return prime;
};

Function.prototype.memorized = function(val) {
    var fn = this;
    this.value = this.value || {};
    if (undefined != this.value[value]) {
        console.log(['Note:', 'cache value is used']);
        return this.value[value];
    } else {
        return this.value[value] = this.apply(this, arguments);
    }
}
isPrime.memorize(5);
