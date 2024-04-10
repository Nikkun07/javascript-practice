//Type Conversion
//Turning one data type into another data type

let score = '100';

//String to Num datatype
// score = Number(score);
// console.log(score + 1);

// console.log(typeof score);

//Number to String datatype
// let result = String(50);
// console.log(result);

let result = Boolean(0); //Positive are Truthy Negative are Falsy (Including Zero)
let result2 = Boolean('0'); //Strings of any length are Truthy (No length are Falsy)
console.log(result2,typeof result2);