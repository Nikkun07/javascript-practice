//DOM Querying

/* const para = document.querySelector('body > h1');

console.log(para); */


const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

paras.forEach(para =>
{
    console.log(para);
});

console.log(errors);

//querySelector = Get one single element
//querySelectorAll = Get serveral elements
//best method for selecting objects inside the HTML Document