//Break and Continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length ; i++)
{

    if(scores[i] === 0)
    {
        continue; //Continues the loop even if this if Statement is true and skips this statement.
    }
    console.log("Your score: ", scores[i]);

    if (scores[i] === 100)
    {
        console.log("Congrats, you got the lowest score!");
        break; //Breaks the loop once this if Statement is true
    }
}