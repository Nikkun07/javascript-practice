//callbacks & foreach

/* const myFunct = (callbackFunct) =>
{
    //do something
    let value = 50;
    callbackFunct(value);
};

myFunct(value =>
{
    //do something
    console.log(value);
}); */

let people = ['Nikkun', 'Guian', 'Renti', 'Sakuya'];


const logPerson = (person, index) =>
{
    console.log(`${index} - Hello ${person} `);
};


people.forEach(logPerson);


