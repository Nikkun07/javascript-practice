//Get reference of 'ul'

const ul = document.querySelector('.people');

const people = ['Nikkun', 'Guian', 'Renti', 'Sakuya'];


let html = ``;
people.forEach(person =>
{
    //create HTML template for each person
    html += `<li style = "color: purple">${person}</li>`;

    //Output in the browser
});


console.log(html);
ul.innerHTML = html;