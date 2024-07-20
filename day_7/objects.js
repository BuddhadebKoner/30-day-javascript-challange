// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
   title: "To Kill a Mockingbird",
   author: "Harper Lee",
   year: 1960
};
console.log("Task 1:", book);

// Task 2: Access and log the title and author properties of the book object.
console.log("Task 2:", book.title);
console.log("Task 2:", book.author);

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = function() {
   return `${this.title} by ${this.author}`;
};
console.log("Task 3:", book.getDetails());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(newYear) {
   this.year = newYear;
};
book.updateYear(2020);
console.log("Task 4:", book);

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
   name: "City Library",
   books: [
       { title: "1984", author: "George Orwell", year: 1949 },
       { title: "Brave New World", author: "Aldous Huxley", year: 1932 }
   ]
};
console.log("Task 5:", library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Task 6:", library.name);
library.books.forEach(book => {
   console.log("Task 6:", book.title);
});

// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTitleAndYear = function() {
   return `${this.title} (${this.year})`;
};
console.log("Task 7:", book.getTitleAndYear());

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
console.log("Task 8:");
for (let key in book) {
   if (book.hasOwnProperty(key)) {
       console.log(`${key}: ${book[key]}`);
   }
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Task 9:", Object.keys(book));
console.log("Task 9:", Object.values(book));

// Feature Requests
// Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
// Already covered in the tasks above.

// Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
// Already covered in the tasks above.

// Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values.
// Already covered in the tasks above.
