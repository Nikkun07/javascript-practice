const para = document.querySelector('p');

// console.log(para.innerText);

/* para.innerText = 'I want to die.';
para.innerText += ' I want to die.'; */

const paras = document.querySelectorAll('p');

/* paras.forEach(para =>
{
    console.log(para.innerText);
    para.innerText += ' New Text';
}); */

const content = document.querySelector('.content');
// console.log(content.innerHTML);
content.innerHTML += '<h2>This is an injected HTML. A New h2.</h2>';


const people = ['Renti', 'Sakuya', 'Nikkun'];

people.forEach(person =>
{
    content.innerHTML += `<p>${person}</p>`;
});