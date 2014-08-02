describe('isNumber function', function() {
    describe('number like', function() {
        it('5 should be a number', function() {
            expect(isNumber(5)).toBe(true);
        });
        it('\'5\' should NOT be a number', function() {
            expect(isNumber('5')).not.toBe(true);
        });
        it('1e5 should be a number', function() {
            expect(isNumber(1e5)).toBe(true);
        });
        it('35.25289 should be a number', function() {
            expect(isNumber(35.25289)).toBe(true);
        });
        it('NaN should NOT be a number', function() {
            expect(isNumber(NaN)).not.toBe(true);
        });
        it('0 should be a number', function() {
            expect(isNumber(0)).toBe(true);
        });
        it('-0 should be a number', function() {
            expect(isNumber(-0)).toBe(true);
        });
        it('Infinity should be a number', function() {
            expect(isNumber(Infinity)).toBe(true);
        });
        it('-Infinity should be a number', function() {
            expect(isNumber(-Infinity)).toBe(true);
        });
    });
    describe('object', function() {
        it('{} should not be number', function() {
            expect(isNumber({})).toBe(false);
            expect(isNaN({})).toBe(true);
        });
    });
    describe('array', function() {
        it('[] should not be number', function() {
            expect(isNumber([])).toBe(false);
            expect(isNaN([])).toBe(false);
        });
    });
    describe('string', function() {
        it('\'string\' is not a number', function() {
            expect(isNumber('string')).toBe(false);
        });
        it('empty string is not a number', function() {
            expect(isNumber(' ')).toBe(false);
            expect(isNumber('')).toBe(false);
        });
        it('\'1\' is not a number', function() {
            expect(isNumber('1')).toBe(false);
        });
    });
    describe('others', function() {
        it('undefined is not a number', function() {
            expect(isNumber(undefined)).toBe(false);
            expect(isNumber()).toBe(false);
        });
        it('null is not a number', function() {
            expect(isNumber(null)).toBe(false);
        });
    });
});
