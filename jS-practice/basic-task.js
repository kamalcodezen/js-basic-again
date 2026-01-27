/**************************************
 
 1. you went to the supermarket to buy some oranges and apples . calculate how much money the shopkeeper will return ? 

 **************************************/

let totalMoney = 1000;
let totalCost = 600;
let change = totalMoney - totalCost;
console.log(change);

// =======================================


/**************************************
 2. write a program to calculate the average marks  of mathematics ,biology, chemistry , physics, and bengali of a student.
 **************************************/

let math = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bengali = 99.50;

let marksSum = math + biology + chemistry + physics + bengali; // totalSum
let average = marksSum / 5;    // average 
console.log(average.toFixed(2));   // .tofixed(2) float