var num1 = 5,
    num2 = 10;

var evalResult = eval("num1 + num2");
var fnObj = new Function("arg1", "arg2", "return arg1 + arg2");
var fnResult = fnObj(num1, num2);
setTimeout(function() {
    console.log('timeout result from', num1, num2, 'is', num1 + num2);
}, 3000);
console.log(evalResult);
console.log(fnResult);
