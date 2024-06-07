//HTTP Requests
//Displays data from a different site/database/server
//HTTP requests are a way to reach out to those servers
//Requests to API endpoints

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () =>
{
    //console.log(request, request.readyState);

    if(request.readyState === 4 && request.status === 200)
    {
        console.log(request, request.responseText);
    }
    else if(request.readyState === 4)
    {
        console.log('Status', request.status, ' Error');
        console.log("Could not fetch the data.");
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
request.send();