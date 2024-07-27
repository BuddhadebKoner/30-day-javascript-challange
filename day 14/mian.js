// Activity 1: Class Definition
// task 1
class Person{
      constructor(name, age){
         this.name = name;
         this.age = age;
      }

      GreatingMess(){
         return `Hello ${this.name}, Welcome to our company. Your age is ${this.age}`;
      }

      UpdateAge(age){
         this.age = age;
         console.log(`Your age is updated to ${this.age}`);
      }

      static Greeting(){
         console.log('This is Static Method , no need to create object to call this method');
      }
}

let person1 = new Person('rahul', 25);
// person1.GreatingMess();

// task 2
let person2 = new Person('Jane', 30);
// person2.GreatingMess();
// person2.UpdateAge(35);

// Activity 2: Class Inheritance
// task 3

class Student extends Person{

   static studentCount = 0;

      constructor(name, age, studentId){
         super(name, age);
         this.studentId = studentId;

         Student.studentCount++;
      }
      
      // Override the greeting method to include student ID
      GreatingMess(){
         console.log(`${super.GreatingMess()} My student Id id ${this.studentId}`);
      }

      getStudentId(){
         console.log(`Your student id is ${this.studentId}`);
      }

     static getStudentCount(){
         return Student.studentCount;
      }
}

let setudent1 = new Student('Rahul', 25, '#8371');

// setudent1.getStudentId()

// task 4
let setudent2 = new Student('Jane', 30, '#8372');
// setudent2.GreatingMess(); 

// Activity 3: Static Methods and Properties
// task 5

// console.log(Person.Greeting());

// task 6
// console.log(Student.getStudentCount()); 

// Activity 4: Getters and Setters
// task 7

class PersonOne{
   constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
   }

   get FullName(){
      return `${this.firstName} ${this.lastName}`;
   }

   set FullName(value){
      let FullNameArray = value.split(' ');
      this.firstName = FullNameArray[0];
      this.lastName = FullNameArray[1];

      return `${this.firstName} ${this.lastName}`;
   }
}

let castomer1 = new PersonOne('Rahul', 'Kumar');
// console.log(castomer1.FullName);

// task 8
// console.log(castomer1.FullName ='Buddhadeb Koner');

// Activity 5: Private Fields (Optional)
// task 9

class Account{
   #balance;

   constructor(balance){
      this.#balance = balance;
   }
   // deposit money
   deposit(amount){
      this.#balance += amount;
      console.log(`Amount ${amount} deposited successfully`);
   }
   // withdraw money
   withdraw(amount){
      if(this.#balance <= amount){
         console.error('Not Much balance to Withdraw');
      }else{
         this.#balance -= amount;
         console.log(`Amount ${amount} withdraw successfully`);
      }
   }

   getBalance(){
      return this.#balance;
   }
}

let myAcount = new Account(2000);
console.log(`My Balance is ${myAcount.getBalance()}`);
myAcount.deposit(500);
console.log(`My Balance is ${myAcount.getBalance()}`);
myAcount.withdraw(1000);
console.log(`My Balance is ${myAcount.getBalance()}`);
myAcount.withdraw(10000);
console.log(`My Balance is ${myAcount.getBalance()}`);

const data = prompt("Enter number")