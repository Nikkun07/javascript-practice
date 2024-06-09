//HTTP Requests
//Displays data from a different site/database/server
//HTTP requests are a way to reach out to those servers
//Requests to API endpoints

const getTodos = (callBack) =>
{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () =>
    {
        //console.log(request, request.readyState);

        if(request.readyState === 4 && request.status === 200)
        {
            callBack(undefined, request.responseText);
        }
        else if(request.readyState === 4)
        {
            callBack('Could not fetch data.', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
};


console.log(1);
console.log(2);

getTodos((err, data) =>
{
    console.log('Callback is Fired');
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(data);
    }
});

console.log(3);
console.log(4);