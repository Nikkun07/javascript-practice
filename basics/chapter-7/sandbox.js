//When listening to a submit event, you attach the event listener to the form itself

const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

form.addEventListener('submit', e =>
{
    e.preventDefault();
    //console.log(username.value);
    console.log(form.username.value); //ID or Name works 
});