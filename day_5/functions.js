// Activity 1: Function Declaration

// Task 1: Function to check if a number is even or odd and log the result to the console
function checkEvenOdd(number) {
   if (number % 2 === 0) {
       console.log(`${number} is even`);
   } else {
       console.log(`${number} is odd`);
   }
}

// Task 2: Function to calculate the square of a number and return the result
function square(number) {
   return number * number;
}

// Activity 2: Function Expression

// Task 3: Function expression to find the maximum of two numbers and log the result to the console
const findMax = function(a, b) {
   const max = a > b ? a : b;
   console.log(`The maximum of ${a} and ${b} is ${max}`);
};

// Task 4: Function expression to concatenate two strings and return the result
const concatenateStrings = function(str1, str2) {
   return str1 + str2;
};

// Activity 3: Arrow Functions

// Task 5: Arrow function to calculate the sum of two numbers and return the result
const sum = (a, b) => a + b;

// Task 6: Arrow function to check if a string contains a specific character and return a boolean value
const containsCharacter = (str, char) => str.includes(char);

// Activity 4: Function Parameters and Default Values

// Task 7: Function that takes two parameters and returns their product. Provide a default value for the second parameter
function multiply(a, b = 1) {
   return a * b;
}

// Task 8: Function that takes a person's name and age and returns a greeting message. Provide a default value for the age
function greet(name, age = 30) {
   return `Hello, my name is ${name} and I am ${age} years old.`;
}

// Activity 5: Higher-Order Functions

// Task 9: Higher-order function that takes a function and a number, and calls the function that many times
function repeatFunction(fn, times) {
   for (let i = 0; i < times; i++) {
       fn();
   }
}

// Task 10: Higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result
function composeFunctions(fn1, fn2, value) {
   return fn2(fn1(value));
}

// Example scripts based on the tasks

// Even or Odd Function Script
checkEvenOdd(5); // Output: 5 is odd
checkEvenOdd(8); // Output: 8 is even

// Square Calculation Function Script
console.log(square(4)); // Output: 16

// Concatenation Function Script
console.log(concatenateStrings('Hello, ', 'World!')); // Output: Hello, World!

// Sum Calculation Arrow Function Script
console.log(sum(3, 7)); // Output: 10

// Higher-Order Function Script
repeatFunction(() => console.log('Hello!'), 3); // Output: Hello! (three times)

const addOne = x => x + 1;
const double = x => x * 2;
console.log(composeFunctions(addOne, double, 5)); // Output: 12
