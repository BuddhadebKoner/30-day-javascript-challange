//  task 2
export const person = {
   firstName: 'Buddhadeb', 
   lastName: 'Koner',       
   age: 25,                
   
   getDetails() {
     return `Hi, I am ${this.firstName} ${this.lastName}, and I am ${this.age} years old.`;
   },
   
   getBirthday() {
     this.age++; 
     return `Happy birthday to me! I am now ${this.age} years old.`;
   }
 };