//When listening to a submit event, you attach the event listener to the form itself

const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

form.addEventListener('submit', e =>
{
    e.preventDefault();
    //console.log(username.value);
    console.log(form.username.value); //ID or Name works 
});

const username = 'nikkun';
const pattern = /^[a-z]{6,}$/; //RegEx format

// let result = pattern.test(username);

// console.log(result);

// if(result)
// {
//     console.log("Regex Test Passed.")
// }
// else
// {
//     console.log("Regex Test Failed");
// }

let result = username.search(pattern); //returns an integer. Returns the index position of the match
console.log(result);