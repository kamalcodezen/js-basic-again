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


//=========================================


/*****************************************
   3.Task is to divide a given number by 5 and and show the remainder as the output.
 *****************************************/

let nums = 118;
let number = 5;
let remainder = nums / number;
console.log(remainder);

// =======================================


/******************************************
    isNaN check  checkNumber = 10;
 ******************************************/

let checkNumber = 10;
let num = Number(checkNumber); // check number
if (isNaN(num)) {           // bolche ata number na ... false
    console.log("input is wrong");
}
else {
    console.log(num + 5);
}

// ===========================================




/******************************************
    isNaN check  checkNumber = "abc";
 ******************************************/

    let checkNum = "abc";
    let nums2 = Number(checkNum);
    if(isNaN(nums2)){
        console.log("Not a Number ");
    } 
    else{
        console.log("Valid Number");
    }
    // ====================================