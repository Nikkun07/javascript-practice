const button = document.querySelector('button');


// button.addEventListener('click', () =>
// {
//     console.log("Clicked");
// });

const items = document.querySelectorAll('li');

items.forEach(item =>
{
    button.addEventListener('click', () =>
    {
        items.forEach(element =>
        {
            console.log('Reset');
            element.classList.remove('done');
        });
    });
});

items.forEach(item =>
{
    item.addEventListener('click', e =>
    {
        //console.log('Item Clicked');
        //console.log(e);
        console.log(e.target);
        //console.log(item);
        e.target.classList.toggle('done');
    });
});

