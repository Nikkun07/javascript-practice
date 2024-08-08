console.log('dom file');

const body = document.querySelector('body')

const styleBody = () =>
{
    body.style.background = '#708090';
};

const addTitle = (text) =>
{
    const title = document.createElement('h1');
    title.textContent = text;
    title.style.color = 'white';
    body.appendChild(title);
};

const email = "example@email.com";

export {styleBody, addTitle, email};