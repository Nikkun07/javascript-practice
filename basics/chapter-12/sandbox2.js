//HTTP Requests
//Displays data from a different site/database/server
//HTTP requests are a way to reach out to those servers
//Requests to API endpoints

const getTodos = (resource) =>
{
    return new Promise((reslove, reject) =>
    {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () =>
        {
            //console.log(request, request.readyState);

            if(request.readyState === 4 && request.status === 200)
            {
                const data = JSON.parse(request.responseText);
                reslove(data);
            }
            else if(request.readyState === 4)
            {
                reject('Error getting resource.')
            }
        });

        request.open('GET', resource);
        request.send();
    });
    
};


getTodos('nikkun.json').then(data =>
{
    console.log('Promise 1 Resolved', data);
    return getTodos('renti.json')
}).then(data =>
{
    console.log('Promise 2 Resolved', data);
    return getTodos('sakuya.json');
}).then(data =>
{
    console.log('Promise 3 Resolved', data)
}).catch(err =>
{
    console.log('Promise Rejected: ', err);
});

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

/* const getSomething = () =>
{
    return new Promise((reslove, reject) =>
    {
        //Network Request here 
        //Fetch Something
        reslove('Some Data');
        reject('Some Error');
    });
}; */

/* getSomething().then((data) =>
{
    console.log(data);
}, (err) =>
{
    console.log(err)
});
 */

/* getSomething().then(data =>
{
    console.log(data);
}).catch(err =>
    {
        console.log(err);
    }
); */