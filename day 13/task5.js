// Create a module that exports multiple constants and functions. Import the entire module as an object into another script and use its properties.

   const PI =  3.14159
   const E =2.71828

   function factorial (n) {
      if (n === 0) {
         return 1;
      }
      return n * factorial(n - 1);
   }

   function square (n) {
      return n * n;
   }

   export const myModule = {
      PI,
      E,
      factorial,
      square
   }

