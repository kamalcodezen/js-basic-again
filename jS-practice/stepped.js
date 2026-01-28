const price = 3000;

if (price >= 6000) {
    //10% discount
    const disCount = price * 10 / 100;
    const payAmount = price - disCount;
    console.log("10% discount", payAmount);
}
else if (price >= 2000) {
    //5% disCount
    const disCount = price * 5 / 100;
    const payAmount = price - disCount;
    console.log("5% discount", payAmount);
}
else {
    console.log(price);
}

