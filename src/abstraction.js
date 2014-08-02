var data = {title: 'random title', desc: 'random desc'};
var plucker = function(field) {
    return function(data) {
        return data && data[field];
    };
};
var getTitle = plucker('title');
var getAge = plucker('desc');
console.log(getTitle(data));
console.log(getAge(data));
