//Store Data in Local Storage
localStorage.setItem('Name', 'Nikkun');
localStorage.setItem('Age', '24');


//Get Data from Local Storage
let name = localStorage.getItem('Name');
let age = localStorage.getItem('Age');

console.log(name, age);


//Updating the Data
localStorage.setItem('Name', 'Sakuya');
localStorage.Age = '69';

name = localStorage.getItem('Name');
age = localStorage.getItem('Age');
console.log(name, age);


//Deleting Data from Local Storage
//localStorage.removeItem('Name');
localStorage.clear();
name = localStorage.getItem('Name');
age = localStorage.getItem('Age');
console.log(name, age);