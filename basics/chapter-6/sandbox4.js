const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.nhentai.net/g/177013');
link.innerText = 'Do not click this link.';

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));

msg.setAttribute('class', 'success!');
console.log(msg.getAttribute('class'));

msg.setAttribute('style', 'color: green;');