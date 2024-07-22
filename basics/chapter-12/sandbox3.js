//Fetch API 

//fetch(Endpoint/Local Resource)
/* Three Steps */
//Fetch data
//Take Response, Return Response.json
//Fire a function when you have access to the data


//asynchronous Function (Always returns a promise)
const getTodos = async() =>
{
    const response = await fetch('nikkun.json');
    const data = await response.json();
    return data;
};
console.log(1);
console.log(2);
console.log(3);
getTodos()
    .then(data => console.log('Resolved', data));

console.log(4);
console.log(5);
//Non-blocking code. Let's the code continue to run.

/* fetch('nikkun.json').then((response) => 
{
    console.log('Resolved', response);
    return response.json();
}).then(data => 
{
    console.log(data);
}
).catch((err) =>
{
    console.log('rejected', err);
}); */

