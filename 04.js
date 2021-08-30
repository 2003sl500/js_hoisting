var food = 'chicken';
console.log(food);
eat();

function eat() {    
    food = 'half-chicken';    
    console.log(food);    
    var food = 'gone';
}

// expected output:
// chicken
// half-chicken

// actual output:
// chicken
// half-chicken

console.log()

let food2 = 'chicken';
console.log(food2);

function eat2(food2) {    
    var food2 = 'gone';
    food2 = 'half-chicken';    
    console.log(food2);    
}

eat2();

// expected output:
// chicken
// half-chicken

// actual output:
// chicken
// half-chicken