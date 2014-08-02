var f = function fr(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fr(n-1);
    }
};

var charp = function charp(n) {
    return (n > 1) ? 'charp-' + charp(n - 1) : 'charp';
};

//console.log(charp(5));

function recursive() {
    recursive();
}

try {
    recursive();
} catch(e) {
    console.log('fei', e.message);
}
