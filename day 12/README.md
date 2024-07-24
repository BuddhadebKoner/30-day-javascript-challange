### Tasks/Activities:

**Activity 1: Basic Error Handling with Try-Catch**
1. Write a function that intentionally throws an error. Use a try-catch block to handle the error and log an appropriate message to the console.
2. Create a function that divides two numbers, throwing an error if the denominator is zero. Use a try-catch block to handle this error.

**Activity 2: Finally Block**
3. Write a script that includes a try-catch block and a finally block. Log messages in each of these blocks to observe the execution flow.

**Activity 3: Custom Error Objects**
4. Create a custom error class that extends the built-in `Error` class. Throw an instance of this custom error in a function and handle it using a try-catch block.
5. Write a function that validates user input (e.g., ensuring a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

**Activity 4: Error Handling in Promises**
6. Create a promise that randomly resolves or rejects. Use the `.catch()` method to handle the rejection and log an appropriate message to the console.
7. Use try-catch within an `async` function to handle errors from a promise that randomly resolves or rejects. Log the error message to the console.

**Activity 5: Graceful Error Handling in Fetch**
8. Use the `fetch` API to request data from an invalid URL and handle the error using `.catch()`. Log an appropriate error message to the console.
9. Use the `fetch` API to request data from an invalid URL within an `async` function and handle the error using try-catch. Log an appropriate error message.