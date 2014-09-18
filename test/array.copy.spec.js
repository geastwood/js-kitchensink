describe('array.copy', function() {
    it('simple array', function() {
        var arr = ['foo', 'bar', 'fb'];
        var newArr = arrayCopy(arr);
        expect(newArr).toEqual(arr);
        arr[0] = 'foo1';
        expect(arr[0]).toBe('foo1');
        expect(newArr[0]).toBe('foo');
    });
    it('complex array', function() {

    });
});
