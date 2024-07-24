// **Activity 1: Understanding Promises
// task 1
new Promise((resolve, reject) => { 
   const resolveMess = "Hey i am completing day 11 challenge"

   if(resolveMess){
      setTimeout(() => {
         resolve(console.log(resolveMess));
      }, 2000);
   }
 })

 // task 2
 const myPromise = new Promise((resolve, reject) => { 
   const resolveMess = ""
   if(resolveMess){
    setTimeout(() => {
        resolve("The resolveMess is not empty")
    }, 2000);
   }else{
    setTimeout(() => {
        reject("The resolve is empty")
    }, 2000);
   }
})

myPromise
.then((result) =>{
    console.log(result);
})
.catch((error) =>{
    console.log(error);
})

// Activity 2: Chaining Promises
// Task 3

function fetchData(data){
    return new Promise((resolve, reject) => { 
        if(data){
            setTimeout(() => {
                resolve(data)
            }, 2000);
        }else{
            setTimeout(() => {
                reject("Data is not Present")
            }, 1000);
        }
     })
}

fetchData('Data 1')
.then((result) =>{
    console.log(result);
    return fetchData('data 2');
})
.then((result) =>{
    console.log(result);
    return fetchData('data 3')
})
.then((result) =>{
    console.log(result);
    return fetchData('data 4')
})
.then((result) =>{
    console.log(result);
    console.log("All Data Fetched");
})
.catch((error) =>{
    console.error(error)
})

// Activity 3: Using Async/Await
// Task 4

function displayResolveValue(data){
    return new Promise((resolve, reject) => { 
        if(data){

            setTimeout(() => {
                resolve(data)
            }, 1000);
        }else{
            reject("Data not found")
        }
     });
}

async function myTask4(){
    try {
        const result = await displayResolveValue("The resolved data is : 0101")
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

myTask4();

// Task 5

async function task5(){
    try {
        const result = await displayResolveValue("")
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

task5();

// Activity 4: Fetching Data from an API

// Task 6

const jocksapi = "https://official-joke-api.appspot.com/jokes/random"


fetch(jocksapi)
  .then(response => response.json()) 
  .then(data => console.log(data))    
  .catch(error => console.error('Error:', error));  

  // task 7 

  async function JocksAreHere(){
    try {
        const responce = await fetch(jocksapi);
        const data = await responce.json();
        console.log(data);
    } catch (error) {
        console.log("Cant fetch data :",error);
    }
  } 

JocksAreHere();


// Activity 5: Concurrent Promises
// Task 8

async function fetchMultipleData(){
   const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
   const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Second'));
   const promise3 = new Promise((resolve) => setTimeout(resolve, 150, 'Third'));
   
   Promise.all([promise1, promise2, promise3])
     .then((values) => {
       console.log('All resolved values:', values);
     })
     .catch((error) => {
       console.error('Error:', error);
     });
   
}

fetchMultipleData();

// Task 9
async function PromisesRace(){

const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Second'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 50, 'Third'));

Promise.race([promise1, promise2, promise3])
  .then((value) => {
    console.log('First resolved value:', value);
  })
  .catch((error) => {
    console.error('First rejected value:', error);
  });
}

PromisesRace();

