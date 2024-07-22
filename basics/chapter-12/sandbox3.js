//Fetch API 

//fetch(Endpoint/Local Resource)

fetch('nikkun.json').then((response) => 
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
});

//Fetch data
//Take Response, Return Response.json
//Fire a function when you have access to the data