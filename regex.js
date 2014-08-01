var s = '<p>some text in side</p>';
var r = /<(\w+)>(.*)<\/\1>/;
console.log(r.exec(s));
