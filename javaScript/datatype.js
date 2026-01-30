/* *********************************
    JS DATA TYPE OF TWO  DATATYPE 

    1. PRIMITIVE DATATYPE (7 DATATYPE);
    2. NON PRIMITIVE DATATYPE(OBJECT(2 DATATYPE ARRAY, FUNCTION));

***********************************/

/******************************
   1.PRIMITIVE DATATYPE---- STRING,BOOLEAN,NUMBER,NULL,UNDEFINED, BIGINT,SYMBOL;
 *******************************/

let fullName = "kamaluddin"; // string DATATYPE
console.log(typeof fullName, fullName);

let roll = 25; // number datatype
console.log(typeof roll, roll);

let isFollow = true; // boolean datatype
console.log(typeof isFollow, isFollow);

let x = null; // object but null hisabe dhora hoi datatype;
console.log(typeof x, x);

let y = undefined; // undefined datatype
console.log(typeof y, y);

let num = BigInt("123"); // BigInt datatype
console.log(typeof num, num);

let s = Symbol("hello!");// symbol datatype
console.log(typeof s, s);



/*=================================================== 
          //  non primitive datatype  

                object datatype
 ============================================*/

const student = {
    fullName: "kamaluddin",
    age: 23,
    isPass: true,
    cgpa: 8.5,
};

// student["age"] = student["age"] + 1;
student["fullName"] = "aisha";
student["name"] = "jhankar"
student["isPass"] = false;
console.log(student.isPass);




/******************************
 *      object task product
 ******************************/

const product = {
    title: "Ball Pen",
    price: 270,
    isDeal: true,
    rating: 5,
};

console.log(product);
// ===profile object task'=

const profile = {
    userName: "kamaluddin",
    follower: 800,
    isFollow: true,
    following: 123,
};
console.log(typeof profile["isFollow"]);