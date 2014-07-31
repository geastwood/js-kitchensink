var source = 'foo=1&foo=2&foo=2&bar=a&bar=b&bar=3';

function convert(source) {
    var keys = {}, rst = '';

    source.replace(/([^=&]+)=([^&])/g, function(full, key, value) {
        keys[key] = (keys[key]) ? (keys[key] + ',' + value) : value;
        return '';
    });

    for (var key in keys) {
        rst = rst + (key + '=' + keys[key] + '&');
    }

    return rst.slice(0, rst.length-1);
}
console.log(convert(source));
