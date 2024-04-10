let age = 25;

//lose comparison (different types can still be equal)
// console.log(age == 25);
// console.log(age == '25');
console.log(age != 25);
console.log(age != '25');
/* Not always the most accurate way of checking something */


//strict comparison (different types cannot be equal)
console.log(age === 25); //Strict Comparison (Checking if same VALUE and TYPE)
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');
/* The most accurate way to check the value and type of something */
/* Is used 99% of the time */