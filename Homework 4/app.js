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
