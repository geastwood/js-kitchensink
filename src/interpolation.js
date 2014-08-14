
function interpolation(str) {
    var args = Array.prototype.slice.call(arguments, 1);
    return str.replace(/{([\d]+)}/mg, function(a, b) {
        return args[b];
    });
}

var rst = interpolation('some "{0}", "{1}", "{2}"', 'str1', 'str2', 3);
console.log(rst);
var multiStr = 'hello\
world\
from\
fei';
console.log(multiStr);
