var food2 = "fish";
console.log(food2);

var mean = function() {
    console.log(food2);
    food2 = "chicken";
    console.log(food2);
}

mean();
console.log(food2);

// expected ouptut:
// fish
// fish
// chicken
// chicken

// actual output:
// fish
// fish
// chicken
// chicken

console.log()

mean();
console.log(food);
var mean = function() {    
    food = "chicken";    
    console.log(food);    
    var food = "fish";    
    console.log(food);
}
console.log(food);

// expected ouptut:
// undefined
// chicken
// fish
// fish

// actual:
// error