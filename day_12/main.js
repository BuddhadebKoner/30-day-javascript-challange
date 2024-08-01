// Activity 1: Basic Error Handling with Try-Catch
function throwError() {
   throw new Error("This is a test error.");
}

function divide(a, b) {
   if (b === 0) {
       throw new Error("Cannot divide by zero.");
   }
   return a / b;
}

// Task 1: Handle error in throwError function
try {
   throwError();
} catch (error) {
   console.error("Caught an error:", error.message);
}

// Task 2: Handle division by zero error
try {
   console.log(divide(10, 0));
} catch (error) {
   console.error("Caught an error:", error.message);
}

// Activity 2: Finally Block
function testFinallyBlock() {
   try {
       console.log("In try block");
       throw new Error("Error in try block");
   } catch (error) {
       console.error("Caught an error:", error.message);
   } finally {
       console.log("In finally block");
   }
}

testFinallyBlock();

// Activity 3: Custom Error Objects
class CustomError extends Error {
   constructor(message) {
       super(message);
       this.name = "CustomError";
   }
}

function validateInput(input) {
   if (!input) {
       throw new CustomError("Input cannot be empty.");
   }
   return input;
}

// Task 4: Handle custom error
try { 
   validateInput("");
} catch (error) {
   if (error instanceof CustomError) {
       console.error("Caught a custom error:", error.message);
   } else {
       console.error("Caught an error:", error.message);
   }
}

// Activity 4: Error Handling in Promises
function randomPromise() {
   return new Promise((resolve, reject) => {
       Math.random() > 0.5 ? resolve("Success!") : reject("Failure!");
   });
}

// Task 6: Handle promise rejection
randomPromise()
   .then(result => console.log(result))
   .catch(error => console.error("Promise rejected:", error));

// Task 7: Handle errors in async function
async function asyncPromiseHandler() {
   try {
       const result = await randomPromise();
       console.log(result);
   } catch (error) {
       console.error("Async function caught an error:", error);
   }
}

asyncPromiseHandler();

// Activity 5: Graceful Error Handling in Fetch
// Task 8: Handle fetch error

const api = "https://official-joke-api.appspot.com/jokes/random"

fetch(api)
   .then(response => response.json())
   .catch(error => console.error("Fetch error:", error));

// Task 9: Handle fetch error in async function
async function asyncFetchHandler() {
   try {
       const response = await fetch(api);
       if (!response.ok) {
           throw new Error("Network response was not ok.");
       }
       const data = await response.json();
       console.log(data);
   } catch (error) {
       console.error("Async fetch caught an error:", error);
   }
}

asyncFetchHandler();