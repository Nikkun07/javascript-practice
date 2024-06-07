console.log(1);
console.log(2);

//Asynchronus Function
setTimeout(() =>
{
    console.log('callback function activated');
}, 3000);

console.log(3);
console.log(4);