console.log("It's alive");
// OVAAAAAAAA DOLEE  E NEBITNOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!! \\\\\\\\\\\//////////\\\\\\\\\\\\//////////\\\\\\\\\//////////\\\\\\\\\\//////
//const prichajSveShtoZnash = [];
//let ime = prompt("vnesi ime");
//prichajSveShtoZnash.push(ime); //

//let mood = prompt("vnesi raspolozhenje");
//prichajSveShtoZnash.push(mood);

//let activity = prompt("shu prajsh");
//prichajSveShtoZnash.push(activity);
//console.log(
//  `This is ${prichajSveShtoZnash[0]}. He is ${prichajSveShtoZnash[1]}, and in order to feel better he ${prichajSveShtoZnash[2]}. `
//);
//FUNKCIIVE ME NERVIRAAT!!!
function tellStory() {
  const person = [];
  let ime = prompt("Please enter the name of the chatacter in the story ");
  if (Number.isNaN(ime)) alert("Please only write letters");
  else person.push(ime);
  let mood = prompt("what is the mood of this person right now?");
  if (Number.isNaN(mood)) alert("Please only write letters");
  else person.push(mood);
  let activity = prompt("and what is he doing");
  if (Number.isNaN(activity)) alert("Please only write letters");
  else person.push(activity);
  return `This is ${person[0]}. He is ${person[1]}, and in order to feel better he ${person[2]}. `;
}
//E PRERESHIV NA 2/3 PATI VEROJATNO MI E FALICHNA NESHTO
//console.log(tellStory());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//let result = sumOfArr([5, 10, 15, 20, 25]);
//console.log(result);

// Check if the argument is an array of length 5
//if (Array.isArray(array) && array.length === 5) {
// Initialize a variable to store the sum

// Loop through the array and add each element to the sum

// Check if the element is a number
//if (typeof array[i] === "number") {

// } else {
// // Return an error message if the element is not a number
// return "The array must contain only numbers";
//}

// Return the sum

//} else {
// Return an error message if the argument is not an array of length 5
//return "The argument must be an array of 5 numbers";
//}

// Test the function with some examples

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
//console.log(sumArray([1, 2, 3, 4, 5])); // 15

function sumOfArr(arras) {
  let sum = 0;
  for (let i = 0; i < arras.lenght; i++) {
    sum += arras[i];
  }

  return sum;
}
//console.log(sumOfArr([1, 2, 3, 4, 10]));
/////// BATALIV DOMASHNATA ZA SEGA!!!
//SE SKRENAV IMAV POGORE NESHTO MALKU RAZLICHNO PISHANO GO NAPRAJV BASH ISTO SEA I SEPAK MI DAVAT  SAMO NULA MENE........

/*Write a javascript function that:

When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC !"
*/

function sentenceM(array) {
  let makeSentence = [];
  for (let word of array) {
    makeSentence.push(array[word]);
  }
  return `These are the elements of the array!!!!! ${array}`;
}
// console.log(sentenceM(["Hello", "there", "students", "of", "SEDC", "!"]));

/*

Homework #4

Title: Looping structures

Description:Write a loop in javascript that goes from 1-20 that will print each number in the console and add "number is even" after every even number and add "number is odd" after every odd number

*/
function loopy() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(`the number ${i} is even`);
    } else console.log(`the number ${i} is odd`);
  }
  return;
}
// loopy();

/*

Homework #5

Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and max numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it
*/
function miniMiniMaxi(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
    if (numbers[i] > max) max = numbers[i];
  }
  console.log(`the min num is ${min}`);
  console.log(`the max num is ${max}`);
  let sum = min + max;
  console.log(`the sum is ${sum}`);
}
// miniMiniMaxi([5, 9, 15, 26, 3]);
/* Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
*/

function fullName(firstName, lastName) {
  const wholeName = [];
  for (i = 0; i < firstName.length && i < lastName.length; i++) {
    wholeName[i] = `(${i + 1}. ${firstName[i]} ${lastName[i]}`;
  }
  return wholeName;
}
const ime = ["Goran", "Zoran", "Marjan", "Damjan"];
const prezime = ["Miovski", "Belevski", "Strezovski", "Peshoski"];
console.log(fullName(ime, prezime));
