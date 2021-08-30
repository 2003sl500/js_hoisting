var brendan = 'super cool';

function print() {    
    brendan = 'only okay';    
    console.log(brendan);
}
console.log(brendan);

// expected output:
// super cool

// actual output:
// super cool


let brendan2 = 'super cool';

function print2() {    
    brendan2 = 'only okay';    
    console.log(brendan2);
}
console.log(brendan2);

// expected output:
// super cool

// actual output:
// super cool


var brendan3 = 'super cool';

function print3() {    
    brendan3 = 'only okay';    
    console.log(brendan3);
}
print();

// expected output:
// only okay

// actual output:
// only okay