//HTTP Requests
//Displays data from a different site/database/server
//HTTP requests are a way to reach out to those servers
//Requests to API endpoints

const getTodos = (resource, callBack) =>
{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () =>
    {
        //console.log(request, request.readyState);

        if(request.readyState === 4 && request.status === 200)
        {
            const data = JSON.parse(request.responseText);
            callBack(undefined, data);
        }
        else if(request.readyState === 4)
        {
            callBack('Could not fetch data.', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
};




/* getTodos('nikkun.json',(err, data) =>
{
    console.log('Callback is Fired');
    console.log(data);
    
    getTodos('renti.json',(err, data) =>
    {
        console.log('Callback is Fired');
        console.log(data);

        getTodos('sakuya.json',(err,data) =>
        {
            console.log('Callback is Fired');
            console.log(data); 
        });
    });
});
 */

//Promise example

const getSomething = () =>
{
    return new Promise((reslove, reject) =>
    {
        //Network Request here 
        //Fetch Something
        reslove('Some Data');
        reject('Some Error');
    });
};