function test(n) {
    function a() {
        return n%3 == 0
    }

    function b() {
        return n%5 == 0
    }

    if (a() && b()) {
        console.log( n + ' is divisable by 3 and 5');
    } else {
        console.log( n + ' is not divisable' );
    }
}

test(5)