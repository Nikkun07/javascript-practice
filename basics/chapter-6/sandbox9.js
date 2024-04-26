const ul = document.querySelector('ul');
// ul.remove();

const items = document.querySelectorAll('li');
const buttonAdd = document.querySelector('button');

buttonAdd.addEventListener('click', () =>
{
    // ul.innerHTML += '<li class="li-style">Something New To Do.</li>';
    const li = document.createElement('li');
    li.textContent = 'Something New To Do';
    li.classList.add('li-style');
    // ul.append(li);
    ul.prepend(li);
});

items.forEach(item =>
{
    item.addEventListener('click', e =>
    {
        // e.target.classList.toggle('done');
        e.target.remove();
    });
});