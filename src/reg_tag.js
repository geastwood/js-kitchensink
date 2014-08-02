var html = '<b class="hello">Hello </b><i>world</i>';
var pattern = /<(\w+)([^>]*)>(.*?)<\/\1>/;
console.log(html.match(pattern));
