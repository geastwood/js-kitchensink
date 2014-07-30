setTimeout(function() {
    console.log('registered first');
}, 15);

function fn() {
    var start = +Date.now(), end;
    var rst = [];

    for (var i = 1, len = 1e7; i < len; i++) {
        rst.push(i*2);
    }

    end = +Date.now();

    console.log('time costed: ', end-start, 'ms');
}

fn();
