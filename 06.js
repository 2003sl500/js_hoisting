console.log(genre);
var genre = "disco";
rewind();

function rewind() {    
    genre = "rock";    
    console.log(genre);    
    var genre = "r&b";    
    console.log(genre);
}
console.log(genre);

// expected output:
// undefined
// error

// actual output:
// undefined
// rock
// r&b
// disco

console.log()

var genre2 = "disco";
console.log(genre2);

function rewind2() {    
    genre2 = "rock";    
    console.log(genre2);    
    var genre2 = "r&b";    
    console.log(genre2);
}
rewind2();
console.log(genre2);

// expected output:
// disco
// rock
// r&b
// rock

// actual output:
// disco
// rock
// r&b
// disco