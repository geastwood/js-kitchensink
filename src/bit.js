var binary = function(num) {
    var prefix = new Array(8 - num.toString(2).length + 1).join('0');
    return  prefix + num.toString(2);
};

var o1 = 2,
    o2 = 4,
    o3 = 8,
    o4 = 16,
    o5 = 32,
    o6 = 64,
    o7 = 128;

var o_all = o1 | o2 | o3 | o4 | o5 | o6 | o7;
var temp = o_all & o3;
