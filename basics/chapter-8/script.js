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

    resultText.classList.remove('hidden');
    //spanResult.innerHTML = spanResult.innerHTML.replace(spanResult.innerHTML, `${score}%`);
    //Better Option:
    spanResult.textContent = `${score}%`;
    
});


//window Object

// console.log('Hello');
// window.console.log("hello");

// console.log(document.querySelector('form'));
