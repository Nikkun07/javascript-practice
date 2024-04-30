const form = document.querySelector('.signup-form');
const feedBack = document.querySelector('.feedback');
form.addEventListener('submit', e =>
{
    e.preventDefault();

    //Validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username))
    {
        console.log("Valid Input");
        feedBack.textContent = 'That Username is valid';
        feedBack.classList.remove('invalid');
        feedBack.classList.add('valid');
    }
    else
    {
        console.log("Invalid Input");
        feedBack.textContent = 'That Username is invalid. Input must only contain letters ranging from 6-12 characters long';
        feedBack.classList.remove('valid');
        feedBack.classList.add('invalid');
    }
});