// Activity 1: Arithmetic Operations
// Task 1: Add two numbers and log the result
function addNumbers(a, b) {
   console.log(`Addition of ${a} and ${b} is: ${a + b}`);
}
addNumbers(5, 3);

// Task 2: Subtract two numbers and log the result
function subtractNumbers(a, b) {
   console.log(`Subtraction of ${a} and ${b} is: ${a - b}`);
}
subtractNumbers(5, 3);

// Task 3: Multiply two numbers and log the result
function multiplyNumbers(a, b) {
   console.log(`Multiplication of ${a} and ${b} is: ${a * b}`);
}
multiplyNumbers(5, 3);

// Task 4: Divide two numbers and log the result
function divideNumbers(a, b) {
   console.log(`Division of ${a} and ${b} is: ${a / b}`);
}
divideNumbers(6, 3);

// Task 5: Find the remainder when a number is divided by another and log the result
function remainderNumbers(a, b) {
   console.log(`Remainder of ${a} divided by ${b} is: ${a % b}`);
}
remainderNumbers(5, 3);

// Activity 2: Assignment Operators
// Task 6: Add a number to a variable and log the result
let num1 = 10;
num1 += 5;
console.log(`After adding 5, num1 is: ${num1}`);

// Task 7: Subtract a number from a variable and log the result
let num2 = 10;
num2 -= 3;
console.log(`After subtracting 3, num2 is: ${num2}`);

// Activity 3: Comparison Operators
// Task 8: Compare two numbers using the equality operator (==) and log the result
function compareEquality(a, b) {
   console.log(`${a} == ${b} is: ${a == b}`);
}
compareEquality(5, 5);

// Task 9: Compare two numbers using the inequality operator (!=) and log the result
function compareInequality(a, b) {
   console.log(`${a} != ${b} is: ${a != b}`);
}
compareInequality(5, 3);

// Task 10: Compare two numbers using the greater than (>) and less than (<) operators and log the result
function compareGreaterThan(a, b) {
   console.log(`${a} > ${b} is: ${a > b}`);
}
compareGreaterThan(5, 3);

function compareLessThan(a, b) {
   console.log(`${a} < ${b} is: ${a < b}`);
}
compareLessThan(3, 5);

// Activity 4: Logical Operators
// Task 11: Use the AND operator (&&) to combine two conditions and log the result
function logicalAnd(a, b) {
   console.log(`${a} > 0 && ${b} > 0 is: ${a > 0 && b > 0}`);
}
logicalAnd(5, 3);

// Task 12: Use the OR operator (||) to combine two conditions and log the result
function logicalOr(a, b) {
   console.log(`${a} > 0 || ${b} < 0 is: ${a > 0 || b < 0}`);
}
logicalOr(5, -3);

// Task 13: Use the NOT operator (!) to negate a condition and log the result
function logicalNot(a) {
   console.log(`!(${a} > 0) is: ${!(a > 0)}`);
}
logicalNot(-5);

// Activity 5: Ternary Operator
// Task 14: Use the ternary operator to check if a number is positive or negative and log the result
function checkPositiveOrNegative(a) {
   const result = (a > 0) ? "positive" : "negative";
   console.log(`${a} is: ${result}`);
}
checkPositiveOrNegative(-5);

// Feature Request 1: Arithmetic Operations Script
function arithmeticOperations(a, b) {
   console.log(`Addition: ${a + b}`);
   console.log(`Subtraction: ${a - b}`);
   console.log(`Multiplication: ${a * b}`);
   console.log(`Division: ${a / b}`);
   console.log(`Remainder: ${a % b}`);
}
arithmeticOperations(10, 2);

// Feature Request 2: Comparison and Logical Operators Script
function comparisonAndLogicalOperators(a, b) {
   console.log(`${a} == ${b}: ${a == b}`);
   console.log(`${a} != ${b}: ${a != b}`);
   console.log(`${a} > ${b}: ${a > b}`);
   console.log(`${a} < ${b}: ${a < b}`);
   console.log(`(${a} > 0) && (${b} > 0): ${a > 0 && b > 0}`);
   console.log(`(${a} > 0) || (${b} < 0): ${a > 0 || b < 0}`);
   console.log(`!(${a} > 0): ${!(a > 0)}`);
}
comparisonAndLogicalOperators(10, -5);

// Feature Request 3: Ternary Operator Script
function ternaryOperatorCheck(a) {
   const result = (a > 0) ? "positive" : "negative";
   console.log(`${a} is: ${result}`);
}
ternaryOperatorCheck(-10);
