const ul = document.querySelector('ul');
// ul.remove();
const buttonAdd = document.querySelector('button');

buttonAdd.addEventListener('click', () =>
{
    // ul.innerHTML += '<li class="li-style">Something New To Do.</li>';
    const li = document.createElement('li');
    li.textContent = 'Something New To Do';
    li.classList.add('li-style');
    // ul.append(li);
    ul.append(li);
});

// const items = document.querySelectorAll('li');

// items.forEach(item =>
// {
//     item.addEventListener('click', e =>
//     {
//         // e.target.classList.toggle('done');
//         // e.target.remove();
//         e.stopPropagation();
//         console.log('event in LI');
//     });
// });

ul.addEventListener('click',e =>
{
    //console.log('event in UL');
    console.log(e);
    if(e.target.tagName === 'LI')
    {
        console.log('Bruh');
        e.target.remove();
        // e.target.classList.add('done');
    }
})