//  arithmetic operator 
let a = 5;
let b = 6;

console.log('a =', a, 'b =', b);
console.log("a + b =", a + b);
console.log("a -  b =", a - b);
console.log("a * b = ", a * b);
console.log("a / b =", a / b);
console.log("a ** b =", a ** b);
console.log("a % b = ", a % b);

// unary operator 
let x = 6;
let y = 3;
console.log("x = ", x, "y =", y);
// x = x + 1;
// x++;
console.log("x =", x);


console.log("y++ =", y++);    // post increment and pre decrement
console.log("y =", y);


/********************************************
 *   assignment operator  += , -=, *=, **=, /=, %=
 ********************************************/

let c = 4;
let d = 3;

// c = c + 2;
// c += 4;
// console.log("c =", c);

c -= 3;
console.log("c =", c);

d **= 4;
console.log("d =", d);



/**************************************
 * comparison operator
 ***************************************/
let s = 5;
let v = 5;
// console.log("2 == 5", a == b); // false
// console.log(" 5 === 5 ", s === v);
// console.log(" 5 !== 5 ", s !== v);

console.log("5 <= 5 =", s <= v);



/****************************************
 *  logical operator
 ****************************************/
//  && operator
let w = 5;
let z = 3;
console.log(" cond1 && cond2 =", w === 5 && 5 > 3);

// || operator 

let e = 4;
let f = 7;

console.log("cond1 || cond2 =", e < f || f === e);


/********************************
 *  condition statement
 ***********************************/
// if statement check   

// let age = 20;
// if (age <= 20) {
//     console.log("biye done");
// };
// if (age > 16) {
//     console.log("biye cancel");
// };

// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// if (mode === "light") {
//     color = "white"
// }
// console.log(color);


// if else statement check 

let mode = "light";
let color;
if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);


let age = 25;
if (age >= 18) {
    console.log("you can vote");
} else {
    console.log("you can't vote");
};


// even odd number
let num = 20;
if (num % 2 !== 0) {
    console.log(num, "this number even");
} else {
    console.log(num, "this number is ODD");
}


// else if statement check
let name = "zubair";
let title;
if (name === "kamal") {
    title = "uddin";
} else if (name === "aisha") {
    title = "shikh";
} else {
    title = "aisha - kamal";
}
console.log(title);


// ternary operator

age >= 18 ? console.log("adult") : console.log("not adult");
let marks = 90
let result = marks >= 70 ? "pass" : "fail";
console.log(result);



/********************************************
 Task 1. Get user to input a number using prompt ("Enter a number"). check if the number is a multiple 5 or not.
 *********************************************/

let user = prompt("Enter a Number");

if (user % 5 === 0) {
    console.log("this number multiple 5");
} else {
    console.log("this number not multiple 5");
}



/*========================================*/

/*******************************************
  task 2. write a code can give grades to students according to their scores.
 ********************************************/

let score = prompt("Enter a Score (0-100);");
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 50 && score <= 69) {
    grade = "C"
} else if (score >= 30 && score <= 49) {
    grade = "D"
} else if ( score >= 0  && score <= 29){
    grade = "Fail"
}
console.log("according to your scores , your grade was : " , grade);

// =================================================
