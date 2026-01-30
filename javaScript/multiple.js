const salary = 25001;
const isBCS = true;
const height = 61;
const hasCar = false;

if (salary > 20000 && height > 60) {
    console.log("su-----patro");
} else {
    console.log("onno patro khuji");
}


if (salary > 25000 || height > 60) {
    console.log("eso baba kobul");
} else {
    console.log("vag tui kamal");
}


// more and more condition 


if (salary > 25000 || height > 60 || isBCS == true) {
    console.log("eso baba kobul");
} else {
    console.log("vag tui kamal");
}


if (salary > 25000 && height > 60 && isBCS == true) {
    console.log("eso baba kobul");
} else {
    console.log("vag tui kamal");
}




// --------------COMPLEX CONDITION---------------

if ((salary > 25000 && isBCS == true) || hasCar == true) {
    console.log("tomar puro family raji");
}

if ((salary > 25000 || isBCS == true) && hasCar == true) {
    console.log("tomar puro family raji");
} 