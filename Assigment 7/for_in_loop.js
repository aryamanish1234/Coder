// for ...in loopin javaScripts allows  itearte over all property  keys of object

//Syntex
for (key in Object) {
    // body 
}

const student = {
    name: "Manish",
    year: 4,
    age: 21
}
for (let key in student) {
    console.log("$key} => ${student[key]}");
}