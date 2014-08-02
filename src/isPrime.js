var isPrime = function(num) {
    var prime = num !== 1; // 1 is never prime
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
            break; 
        } 
    }
    return prime;
}
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(23));
console.log(isPrime(1));
console.log(isPrime(7));
