
// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var myVar = 10;
console.log(myVar); // Output: 10

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let myLet = "Hello, World!";
console.log(myLet); // Output: Hello, World!

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const myConst = true;
console.log(myConst); // Output: true

// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let numberVar = 42;
let stringVar = "JavaScript";
let booleanVar = false;
let objectVar = { name: "John", age: 30 };
let arrayVar = [1, 2, 3];

console.log(typeof numberVar); // Output: number
console.log(typeof stringVar); // Output: string
console.log(typeof booleanVar); // Output: boolean
console.log(typeof objectVar); // Output: object
console.log(typeof arrayVar); // Output: object

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let myVariable = "initial value";
console.log(myVariable); // Output: initial value
myVariable = "new value";
console.log(myVariable); // Output: new value

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.
const myConstant = 100;
console.log(myConstant); // Output: 100
// myConstant = 200; // This will cause an error: TypeError: Assignment to constant variable.

// Feature Request

// 1. Variable Types Console Log
// Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let num = 25;
let str = "Learning JavaScript";
let bool = true;
let obj = { language: "JavaScript" };
let arr = [1, 2, 3, 4, 5];

console.log(num, typeof num); // Output: 25 number
console.log(str, typeof str); // Output: Learning JavaScript string
console.log(bool, typeof bool); // Output: true boolean
console.log(obj, typeof obj); // Output: { language: "JavaScript" } object
console.log(arr, typeof arr); // Output: [1, 2, 3, 4, 5] object

// 2. Reassignment Demo
// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
let reassignable = "initial value";
console.log(reassignable); // Output: initial value
reassignable = "reassigned value";
console.log(reassignable); // Output: reassigned value

const immutable = "constant value";
console.log(immutable); // Output: constant value
// immutable = "new value"; // This will cause an error: TypeError: Assignment to constant variable.
