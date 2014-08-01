var getName = function() {
    return this.name;
};

console.log(getName.bind({name: 'foo'})());
console.log(getName.bind({name: 'bar'})());
