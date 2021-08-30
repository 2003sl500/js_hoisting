/* console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students) {    
    const dojo = {};    
    dojo.name = name;    
    dojo.students = students;    
    if (dojo.students > 50) {         dojo.hiring = true;     }    
    else if (dojo.students <= 0) {         dojo = "closed for now";     }    
    return dojo;
} */

// expected output:
// error

// actual output:
// error

console.log()

const dojo = {};    

function makeDojo(name, students) {    
    dojo.name = name;    
    dojo.students = students;    
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo.hiring = "closed for now";
    }    
    return dojo;
}

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

// actual output:
// { name: 'Chicago', students: 65, hiring: true }
// { name: 'Berkeley', students: 0, hiring: 'closed for now' }