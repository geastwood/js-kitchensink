var rst = (function() {
    return Array.prototype.reduce.call('string2', function(rst, current) {
        return rst + current.charCodeAt(0);
    }, 0);
})();

console.log(rst);


