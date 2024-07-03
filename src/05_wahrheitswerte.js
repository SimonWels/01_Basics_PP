
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter Iteration 1
// let year = 2024;
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;

// Berechnung Alter Iteration 2
let date = new date();
let year = date.getFullYear();
console.log("Datum " + Date);

// Berechnung Alter Iteration 3
console.log("Jahr " + date.getFullYear());
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;


// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

// Deklaration
let isJohnOlder; // is John Older? --> y/n --> true / false
isJohnOlder = (ageJohn > ageMark); // Test auf Ungleichheit
let isJohnEqual = (ageJohn == ageMark); // Test auf Gleichheit