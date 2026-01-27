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

let age = 20;
if (age <= 20) {
    console.log("biye done");
};
if (age > 16) {
    console.log("biye cancel");
};

let mode = "light";
let color;

if (mode === "dark") {
    color = "black";
}
if (mode === "light") {
    color = "white"
}
console.log(color);


