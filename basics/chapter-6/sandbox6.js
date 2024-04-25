/* const content = document.querySelector('p');


console.log(content.classList);

content.classList.add('error');
content.classList.remove('error');
content.classList.add('success'); */


const paras = document.querySelectorAll('p');



paras.forEach(ptags =>
{
    console.log(ptags.textContent);
    if (ptags.textContent.toLowerCase().includes('success'))
    {
        //if it contains success, print green.
        ptags.classList.add('success');
    }
    else if (ptags.textContent.toLowerCase().includes('error'))
    {
        //if it contains error, print red.
        ptags.classList.add('error');
    }

});
const title = document.querySelector('.title');

title.classList.toggle('test');
// title.classList.toggle('test');