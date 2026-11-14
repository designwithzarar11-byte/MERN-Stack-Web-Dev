// Global Scope
// var age = 20;
// if(true){
// console.log(age);
// }

// Function Scope
// function trueAge(){
//     var age = 20;
//     console.log(age);
// }
// trueAge();

// let and const are block scoped

// let age = 20;
// console.log(age);

// Redefining a variable with let or const in the same scope will throw an error
// let age = 20;
// let age = 30;
// console.log(age);

// Manipulating the value of a variable defined with let is allowed
// let age = 20;
// age = 30;
// console.log(age);

// const age = 20;
// age = 30; // This will throw an error because const variables cannot be reassigned
// console.log(age);

// const age = 20;
// console.log(age); // This will print 20

// let value = null;
// console.log(value); // This will print null

// symbol is a primitive data type that is used to create unique identifiers for objects. Each time you create a new symbol, it is guaranteed to be unique, even if you use the same description.

// const sym1 = Symbol('description');
// const sym2 = Symbol('description');

// console.log(sym1 === sym2); // This will print false because each symbol is unique