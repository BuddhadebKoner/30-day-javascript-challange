// Day 8: ES6+ Features

// Activity 1: Template Literals
// Task 1: Template Literals with Variables
const name = "Alice";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Task 2: Multi-line String with Template Literals
const multiLineString = `This is a string
that spans multiple
lines using template literals.`;
console.log(multiLineString);

// Activity 2: Destructuring
// Task 3: Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second); // 1 2

// Task 4: Object Destructuring
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};
const { title, author } = book;
console.log(title, author); // To Kill a Mockingbird Harper Lee

// Activity 3: Spread and Rest Operators
// Task 5: Spread Operator
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // [1, 2, 3, 4, 5, 6]

// Task 6: Rest Operator
const sum = (...args) => args.reduce((acc, val) => acc + val, 0);
console.log(sum(1, 2, 3, 4)); // 10

// Activity 4: Default Parameters
// Task 7: Function with Default Parameters
const multiply = (a, b = 1) => a * b;
console.log(multiply(5, 2)); // 10
console.log(multiply(5));    // 5

// Activity 5: Enhanced Object Literals
// Task 8: Enhanced Object Literals with Methods and Properties
const createPerson = (name, age) => ({
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
});
const person = createPerson("Bob", 25);
console.log(person);
person.greet();

// Task 9: Object with Computed Property Names
const propName = "favoriteColor";
const personWithColor = {
  name: "Eve",
  [propName]: "blue",
};
console.log(personWithColor); // { name: 'Eve', favoriteColor: 'blue' }
