dojo = "san jose";
console.log(dojo);
learn();

function learn() {    
    dojo = "seattle";    
    console.log(dojo);    
    var dojo = "burbank";    
    console.log(dojo);
}
console.log(dojo);

// expected output:
// san jose
// seattle
// burbank
// san jose

// actual output:
// san jose
// seattle
// burbank
// san jose

console.log()

var dojo = "burbank";    
console.log(dojo);

function learn() {    
    dojo = "seattle";    
    console.log(dojo);    
    dojo = "san jose";
    console.log(dojo);
}

learn();
console.log(dojo);

// expected output:
// burbank
// seattle
// san jose
// san jose

// actual output:
// burbank
// seattle
// burbank
// san jose