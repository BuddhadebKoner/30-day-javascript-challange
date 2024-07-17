// JavaScript file for Day 4: Loops

// Activity 1: For Loop

// Task 1: Print numbers from 1 to 10 using a for loop
console.log('Task 1: Print numbers from 1 to 10 using a for loop');
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2: Print the multiplication table of 5 using a for loop
console.log('Task 2: Print the multiplication table of 5 using a for loop');
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// Activity 2: While Loop

// Task 3: Calculate the sum of numbers from 1 to 10 using a while loop
console.log('Task 3: Calculate the sum of numbers from 1 to 10 using a while loop');
let sum = 0;
let num = 1;
while (num <= 10) {
  sum += num;
  num++;
}
console.log(`Sum: ${sum}`);

// Task 4: Print numbers from 10 to 1 using a while loop
console.log('Task 4: Print numbers from 10 to 1 using a while loop');
num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}

// Activity 3: Do...While Loop

// Task 5: Print numbers from 1 to 5 using a do...while loop
console.log('Task 5: Print numbers from 1 to 5 using a do...while loop');
num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

// Task 6: Calculate the factorial of a number using a do...while loop
console.log('Task 6: Calculate the factorial of a number using a do...while loop');
let factorial = 1;
let n = 5; // Change this number to calculate the factorial of a different number
num = 1;
do {
  factorial *= num;
  num++;
} while (num <= n);
console.log(`Factorial of ${n}: ${factorial}`);

// Activity 4: Nested Loops

// Task 7: Print a pattern using nested for loops
console.log('Task 7: Print a pattern using nested for loops');
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}

// Activity 5: Loop Control Statements

// Task 8: Print numbers from 1 to 10, but skip the number 5 using the continue statement
console.log('Task 8: Print numbers from 1 to 10, but skip the number 5 using the continue statement');
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task 9: Print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement
console.log('Task 9: Print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement');
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
