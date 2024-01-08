import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import emojipedia from './emojipedia';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// var numbers = [3, 56, 2, 48, 5];

//1.0 - Map -Create a new array by doing something with each item in an array. Example below
// function double(x){
//   return x *2 
// }  
// const newNumbers = numbers.map(double);


//1.1 - Equivalent to the map function but requires more effort
// var newNumbers = [];
//function double(x){
//newNumbers.push(x * 2);  
//}
//number.forEach(double);

//1.2 - Map - using arrow function 
// const newNumbers = numbers.map ( x => x * 2); 

//2.0 - Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(fucntion(num){
//   return num > 10
// });

//2.1 - Equivalent to filter function but requires more effort  
//var newNumbers = [];
// numbers.forEach(function(num){
// if (num > 10){
// newNumbers.push(num);
//}
//})

//2.2 - Filter - using arrow function 
// const newNumbers = numbers.filter( num =>
//    num > 10
// );

//3.0 - Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(accumulator, currentNumber){
//return accumulator + newNumber  
//});

// 3.1 Equivalent to Reduce fucntion but requires more effort
// var newNumber = 0;
// numbers.forEach(function(currentNumber){
// mewNMumber += currentNumber 
//});

// 3.2 - Reduce - using arrow function 
// var newNumber = numbers.reduce(accumulator, currentNumber) => 
// accumulator + newNumber  
//);

//4.0 - Find - find the first item that matches from an array. Not loop through entire array but stop when finds. 
// const newNumber=numbers.find(function(num){
// return num > 10; 
//}); 

//4.1 - Find - using arrow function 
// const newNumber=numbers.find( num =>
//  num > 10; 
//); 

//5.0 - FindIndex - find the index of the first item that matches.
// const newNumber=numbers.find(function(num){
// return num > 10; 
//}); 

//5.1 Findindex - using arrow function 
// const newNumber=numbers.find( num => 
// num > 10; 
//); 

// return a max of 100 characted "meaning" object from emojipedia.js 
const newEmojipedia = emojipedia.map(function (emojiEntry){
  return emojiEntry.meaning.substring(0, 100);
}); 

console.log(newEmojipedia); 

//6.0 Arrow function. Replaces the world function or its name by an arrow. "( )" not needed
// if there is 1 input, only when there is more than 1 inputs. Can also delete "return" and
// curly braces. 
// const newNumbers = numbers.map( x => 
//   x * x
// );

// 6.1 If we are not to use the arrrow function 
// const newNumbers = numbers.map(function (x){
//   return x * x;
// });

// console.log(newNumbers);
