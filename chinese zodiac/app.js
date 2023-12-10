console.log("It's alive");
//console.log("MI ISKACHA PROBLEM U KONZOLATA NEZNA SHO MU E");
let yearInput = prompt("Please enter your birth year");
let chineseZodiac = (yearInput - 4) % 12;
if (yearInput === null) {
  alert("you haven't written anything. Please write your birth year.");
} else if (isNaN(yearInput)) {
  // neshto tuka mi e problemot ama nezna shto
  // misla deka go reshiv donekade.....
  console.log("You've inserted invalid inputs. Please only write NUMBERS!");
} else if (chineseZodiac === 0) {
  console.log(`your chinese zodiac is rat`);
} else if (chineseZodiac === 0) {
  console.log(`your chinese zodiac is Rat`);
} else if (chineseZodiac === 1) {
  console.log(`your chinese zodiac is Ox`);
} else if (chineseZodiac === 2) {
  console.log(`your chinese zodiac is Tiger`);
} else if (chineseZodiac === 3) {
  console.log(`your chinese zodiac is Rabbit`);
} else if (chineseZodiac === 4) {
  console.log(`your chinese zodiac is Dragon`);
} else if (chineseZodiac === 5) {
  console.log(`your chinese zodiac is Snake`);
} else if (chineseZodiac === 6) {
  console.log(`your chinese zodiac is Horse`);
} else if (chineseZodiac === 7) {
  console.log(`your chinese zodiac is Goat`);
} else if (chineseZodiac === 8) {
  console.log(`your chinese zodiac is Monkey`);
} else if (chineseZodiac === 9) {
  console.log(`your chinese zodiac is Rooster`);
} else if (chineseZodiac === 10) {
  console.log(`your chinese zodiac is  Dog`);
} else if (chineseZodiac === 11) {
  console.log(`your chinese zodiac is  Pig`);
}
