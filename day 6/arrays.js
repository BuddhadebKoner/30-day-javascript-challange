// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let numbers = [1, 2, 3, 4, 5];
console.log("Task 1:", numbers);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log("Task 2: First element:", numbers[0]);
console.log("Task 2: Last element:", numbers[numbers.length - 1]);

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log("Task 3:", numbers);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log("Task 4:", numbers);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log("Task 5:", numbers);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(0);
console.log("Task 6:", numbers);

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let doubledNumbers = numbers.map(num => num * 2);
console.log("Task 7:", doubledNumbers);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Task 8:", evenNumbers);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Task 9:", sum);

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Task 10:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Task 11:");
numbers.forEach(num => console.log(num));

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Task 12:", matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
console.log("Task 13: Element at [1][1]:", matrix[1][1]);

// Feature Request Scripts

// Array Manipulation Script
function arrayManipulation() {
    let arr = [1, 2, 3];
    console.log("Initial array:", arr);

    arr.push(4);
    console.log("After push:", arr);

    arr.pop();
    console.log("After pop:", arr);

    arr.shift();
    console.log("After shift:", arr);

    arr.unshift(0);
    console.log("After unshift:", arr);
}
arrayManipulation();

// Array Transformation Script
function arrayTransformation() {
    let arr = [1, 2, 3, 4, 5];

    let mapped = arr.map(num => num * 2);
    console.log("Mapped array (doubled):", mapped);

    let filtered = arr.filter(num => num % 2 === 0);
    console.log("Filtered array (even numbers):", filtered);

    let reduced = arr.reduce((total, num) => total + num, 0);
    console.log("Reduced array (sum):", reduced);
}
arrayTransformation();

// Array Iteration Script
function arrayIteration() {
    let arr = [1, 2, 3, 4, 5];

    console.log("Using for loop:");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    console.log("Using forEach method:");
    arr.forEach(num => console.log(num));
}
arrayIteration();

// Two-dimensional Array Script
function twoDimensionalArray() {
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log("Matrix:", matrix);

    console.log("Specific element at [2][0]:", matrix[2][0]);
}
twoDimensionalArray();
