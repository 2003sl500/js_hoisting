var needle = 'haystack';
test();

function test() {    
    var needle = 'magnet';    
    console.log(needle);
}

// expected output:
// magnet

// actual output:
// magnet


var needle2 = 'haystack';

function test2() {
    let needle2 = 'magnet';
    console.log(needle2);
}
test();

// expected output:
// magnet

// actual output:
// magnet