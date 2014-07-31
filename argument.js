var f = function() {
    console.log(typeof arguments.shift);
    console.log(typeof arguments.push);
    console.log(typeof arguments);
    console.log(arguments);
};

f('string', 2);
