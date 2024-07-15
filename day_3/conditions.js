// Activity 1: If-Else Statements

// Task 1: Check if a number is positive, negative, or zero
function checkNumber(num) {
   if (num > 0) {
     console.log(`${num} is positive.`);
   } else if (num < 0) {
     console.log(`${num} is negative.`);
   } else {
     console.log(`${num} is zero.`);
   }
 }
 
 // Task 2: Check if a person is eligible to vote (age >= 18)
 function checkVotingEligibility(age) {
   if (age >= 18) {
     console.log(`Age ${age}: Eligible to vote.`);
   } else {
     console.log(`Age ${age}: Not eligible to vote.`);
   }
 }
 
 // Activity 2: Nested If-Else Statements
 
 // Task 3: Find the largest of three numbers
 function findLargest(a, b, c) {
   if (a >= b) {
     if (a >= c) {
       console.log(`${a} is the largest.`);
     } else {
       console.log(`${c} is the largest.`);
     }
   } else {
     if (b >= c) {
       console.log(`${b} is the largest.`);
     } else {
       console.log(`${c} is the largest.`);
     }
   }
 }
 
 // Activity 3: Switch Case
 
 // Task 4: Determine the day of the week based on a number (1-7)
 function getDayOfWeek(dayNumber) {
   let day;
   switch (dayNumber) {
     case 1:
       day = 'Monday';
       break;
     case 2:
       day = 'Tuesday';
       break;
     case 3:
       day = 'Wednesday';
       break;
     case 4:
       day = 'Thursday';
       break;
     case 5:
       day = 'Friday';
       break;
     case 6:
       day = 'Saturday';
       break;
     case 7:
       day = 'Sunday';
       break;
     default:
       day = 'Invalid day number';
   }
   console.log(`Day ${dayNumber}: ${day}`);
 }
 
 // Task 5: Assign a grade based on a score
 function getGrade(score) {
   let grade;
   switch (true) {
     case (score >= 90):
       grade = 'A';
       break;
     case (score >= 80):
       grade = 'B';
       break;
     case (score >= 70):
       grade = 'C';
       break;
     case (score >= 60):
       grade = 'D';
       break;
     default:
       grade = 'F';
   }
   console.log(`Score ${score}: Grade ${grade}`);
 }
 
 // Activity 4: Conditional (Ternary) Operator
 
 // Task 6: Check if a number is even or odd
 function checkEvenOdd(num) {
   const result = (num % 2 === 0) ? 'even' : 'odd';
   console.log(`${num} is ${result}.`);
 }
 
 // Activity 5: Combining Conditions
 
 // Task 7: Check if a year is a leap year
 function checkLeapYear(year) {
   const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
   const result = isLeapYear ? 'a leap year' : 'not a leap year';
   console.log(`${year} is ${result}.`);
 }
 
 // Feature Requests:
 
 // 1. Number Check Script
 checkNumber(10); // Positive number example
 checkNumber(-5); // Negative number example
 checkNumber(0);  // Zero example
 
 // 2. Voting Eligibility Script
 checkVotingEligibility(20); // Eligible example
 checkVotingEligibility(16); // Not eligible example
 
 // 3. Day of the Week Script
 getDayOfWeek(1); // Monday example
 getDayOfWeek(8); // Invalid day example
 
 // 4. Grade Assignment Script
 getGrade(95); // Grade A example
 getGrade(85); // Grade B example
 getGrade(75); // Grade C example
 getGrade(65); // Grade D example
 getGrade(55); // Grade F example
 
 // 5. Leap Year Check Script
 checkLeapYear(2024); // Leap year example
 checkLeapYear(2023); // Not a leap year example 