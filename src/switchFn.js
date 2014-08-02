var somefunction = function() { return 'I\'m a function'; };
var makeSwitch = function(fn) {
    var rst;

    switch(fn) {

        case somefunction:
            rst = 'switch block works with function';
            break;

        default:
            rst = 'default block';
    }
    return rst;
};

console.log(makeSwitch(somefunction));
