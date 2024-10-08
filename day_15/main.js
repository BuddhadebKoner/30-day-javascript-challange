// real life example in example.html

// Activity 1: Understanding Closures
// task 1

function outerFunc1() {
   const outerVar = 10;

   function innerFunc1() {
      console.log(outerVar);
   }
   return innerFunc1;
}

// outerFunc1()();

// task 2
function outerFunc2() {
   let counter = 0;

   function increment() {
      counter++;
      console.log(counter);
      return counter;
   }
   function getValue() {
      console.log(counter);
      return counter;
   }

   return {
      increment,
      getValue
   };
}

const counter = outerFunc2();
// counter.increment();
// counter.increment();
// counter.getValue();

// Activity 2: Practical Closures
// task 3

const createUnqueId = () => {
   let id = 0;

   return () => {
      id++;
      return id;
   }
}

const unqueId = createUnqueId();
// console.log(unqueId());
// console.log(unqueId());
// console.log(unqueId());

// task 4

const getUser = (name = "no name") => {
   return () => {
      return name;
   }
}

const User = getUser("Buddhadeb Koner");
// console.log(User());

// Activity 3: Closures in Loops
// task 5

let arrayFunc = [];

for (let i = 0; i <= 5; i++) {
   arrayFunc.push(
      (function (index) {
         return function () {
            console.log(index);
         }
      })(i) // // Immediately execute this function with `i` function (index) (i)
   )
}

// arrayFunc.forEach(fnc => fnc());
// console.log(arrayFunc);

// Activity 4: Module Pattern
// task 6

function outerFunc3() {
   let items = [];

   function itemExist(item) {
      return items.includes(item);
   }

   return {
      addItems: function (item) {
         if (!itemExist(item)) {
            items.push(item);
            console.log(`${item} added`);
         } else {
            console.error(`${item} already exists`);
         }
      },
      removeItems: function (item) {
         const index = items.indexOf(item);
         if (index !== -1) {
            items.splice(index, 1);
            console.log(`${item} removed`);
         } else {
            console.error(`${item} not found`);
         }
      },
      listItems: function () {
         console.log(items);
      }
   }
}

const totalList = outerFunc3();
// totalList.addItems("item1");
// totalList.addItems("item2");
// totalList.addItems("item2");
// totalList.addItems("item3");
// totalList.removeItems("item2");
// totalList.removeItems("item5");
// totalList.listItems();

// Activity 5: Memoization
// task 7

function squre(num) {
   return num * num;
}

function memoizes1(fnc) {
   const cache = {}

   return function (num) {
      if (num in cache) {
         console.log("Returning cashe result : ", num);
         return cache[num];
      }

      const result = fnc(num)
      cache[num] = result;
      console.log("Computing Result For : ", num);
      return result;
   }
}

const memoizedSquare = memoizes1(squre);
// console.log(memoizedSquare(5));
// console.log(memoizedSquare(5));
// console.log(memoizedSquare(10));

// taskk 8

function factorial(n) {
   if (n === 0) {
      return 1;
   }
   return n * factorial(n - 1);
}

function memoizes2(fnc) {
   const cache = {}

   return function (num) {
      if (num in cache) {
         console.log("Returning Result From cache : ", num);
         return cache[num];
      }

      const result = fnc(num)
      cache[num] = result;
      console.log("Calculating Factorial : ", num);
      return result;
   }
}

const memoizes2Factorial = memoizes2(factorial);

// console.log(memoizes2Factorial(5));
// console.log(memoizes2Factorial(5));
// console.log(memoizes2Factorial(10));