var f = function() {

    var f = function() {
        console.log('from inside', b);
    };

    //
    //if calling f here, due to hoisting, the declaration of 'b' is hoisted, but
    //the assignment is right here;
    //
    var b = 11;
    f(); // calling f here, b is already given a value
    return 'out side f';
};
console.log(f());
