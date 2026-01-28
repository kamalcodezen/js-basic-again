/***********************************
 * TERNARY -->  three part
 * 
 *   ?    : 
 * 
 * condition  ? do something when true : do something when false ; 
 ***********************************/


//normal if-else
let age = 10;
if (age >= 18) {
    console.log("you can vote");
} else {
    console.log("you can't vote");
}


// simple ternary 
age = 18 ? console.log("can vote") : console.log("can't vote");


// condition 
let price = 500;
let isLeader =false;

if(isLeader === true){
    price = 0;
} else {
    price = price + 100;
}



price = isLeader === true ?  0 : price + 100 ;
console.log(price)