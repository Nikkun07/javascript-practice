//HTTP Requests
//Displays data from a different site/database/server
//HTTP requests are a way to reach out to those servers
//Requests to API endpoints

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () =>
{
    //console.log(request, request.readyState);

    if(request.readyState === 4)
    {
        console.log(request.responseText);
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();