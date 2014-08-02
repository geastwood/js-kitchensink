var switchComparison = function(condition) {
    var rst;
    switch(condition) {
        case '1':
            rst = 'In string 1 block';
            break;
        case 1:
            rst = 'In numeric 1 block';
            break;
        case 2:
            rst = 'In numeric 2 block';
            break;
        case NaN:
            rst = 'In NaN block';
            break;
        case []:
            rst = 'In Array block';
            break;
        case '':
            rst = 'In empty string block';
            break;
        case undefined:
            rst = 'In undefined block';
            break;
        case null:
            rst = 'In null block';
            break;
        default:
            rst = 'In default block';
    }
    return rst;
};
console.log('With string: \'1\', result is ', switchComparison('1'));
console.log('With number: 1, result is ', switchComparison(1));
console.log('With string: \'2\', result is ', switchComparison('2'));
console.log('With number: 2, result is ', switchComparison(2));
console.log('With NaN, result is ', switchComparison(NaN));
console.log('With [], result is ', switchComparison([]));
console.log('With empty string, result is ', switchComparison(""));
console.log('With undefined, result is ', switchComparison());
console.log('With null, result is ', switchComparison(null));
