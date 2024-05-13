const resultText = document.querySelector('.result');
const correctAnswers = ['B', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const spanResult = document.querySelector('.span-result');

form.addEventListener('submit', e =>
{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    //check answers
    userAnswers.forEach((answer, index) =>
    {
        if(answer === correctAnswers[index])
        {
            score += 25;
        }
    });

    scrollTo(0,0);
    resultText.classList.remove('hidden');
    //spanResult.innerHTML = spanResult.innerHTML.replace(spanResult.innerHTML, `${score}%`);
    //Better Option:
    //spanResult.textContent = `${score}%`;

    let output = 0;
    const timer = setInterval(() =>
    {
        spanResult.textContent = `${output}%`;
        if(output === score)
            {
                clearInterval(timer);
            }
        else
        {
            output++;
        }
    }, 10);
    
});


//window Object

// console.log('Hello');
// window.console.log("hello");

// console.log(document.querySelector('form'));

//alert("Hello");

// setTimeout(() =>
// {
//     alert("Hello Retard");
// }, 3000);

// let i = 0;

// const timer = setInterval(() =>
// {
//     console.log('Hello');
//     i++;
//     if (i === 5)
//         {
//             clearInterval(timer);
//         }
// }, 1000);