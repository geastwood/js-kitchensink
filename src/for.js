function loopWithMoreContidions() {

    var source = [1, 2, 3, 4, 5];
    var toloop = true;

    // loop with more conditions
    /* jshint forin: false */
    for (var i = 0, a = [], len = source.length; (i < len) && toloop; i++) {
        console.log(i + 1);
        if (i === 2) {
            toloop = false;
        }
        a[i] = source[i] * 2;
    }
    return a;
}

console.log(loopWithMoreContidions());
