
let age = 17;
let price = 600;

if (age <= 12) {
    console.log("you can eat free");
}
else if (age >= 60) {
    //50% discount
    let disCount = price * 50 / 100;
    let payAmount = price - disCount;
    console.log("50% discount", payAmount);
}
else if (age >= 50) {
    //25% disCount
    let disCount = price * 25 / 100;
    let payAmount = price - disCount;
    console.log("25% discount", payAmount);
}
else if (age >= 40) {
    //10%  discount 
    let disCount = price * 10 / 100;
    let payAmount = price - disCount;
    console.log("10% discount", payAmount)
}
else {
    console.log(price);
}