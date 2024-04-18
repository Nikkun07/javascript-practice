//Arguments & Parameters

const speak = function(name = 'Retard', time = 'Night') //Order of Parameter must be same as order of Argument
{
    console.log(`Good ${time}, ${name}`);
};

console.log(name); //Nothings going to happen because the name variable is locally declared inside the function

speak(/* 'Retard', 'Morning' */); //Order of Argument must be the same order as Parameter
speak('Guian', 'Day'); 



