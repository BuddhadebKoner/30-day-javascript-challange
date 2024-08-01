// Activity 1: Creating and Exporting Modules
// Task 1

import { addNumber } from "./task1.js";

const result = addNumber(1, 2);
console.log(`The result of adding 1 and 2 is ${result}`);


// Task 2
import { person } from "./task2.js";

console.log(`${person.getDetails()} and ${person.getBirthday()}`);


// Activity 2: Named and Default Exports
// Task 3
import { capitalize, greet, multiply } from "./task3.js";

console.log(greet('Alice')); // Output: Hello, Alice!
console.log(capitalize('hello')); // Output: Hello
console.log(multiply(5, 3)); // Output: 15

// task 4
import task4 from "./task4.js";
const name = 'Buddhadeb';
console.log(task4(name));

// Activity 3: Importing Entire Modules
// Task 5
import { myModule } from "./task5.js";

console.log(`PI: ${myModule.PI}`);
console.log(`E: ${myModule.E}`);
console.log(`Factorial of 5: ${myModule.factorial(5)}`);
console.log(`Square of 5: ${myModule.square(5)}`);

// Activity 4: Using Third-Party Modules
// Task 6
import _ from 'lodash';
const { debounce } = _;

function saveChanges() {
    console.log('Changes saved!');
}

const debounceSave = debounce(saveChanges, 500);

process.stdin.on('data', () => {
    debounceSave();
});

console.log('Listening for input. Type something and press Enter...');

// Task 7

import axios from 'axios';

const api = 'https://official-joke-api.appspot.com/random_joke';

async function getJoke() {
    try {
        const response = await axios.get(api);
        console.log(`Joke: ${response.data.setup}`);
        console.log(`Punchline: ${response.data.punchline}`);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

getJoke();


// Activity 5: Module Bundling (Optional)
// Task 8

// pending ..........