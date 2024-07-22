//Throwing and Catching Errors

const getTodos = async() =>
    {
        const response = await fetch('nikkun.json');
        if(response.status !== 200)
        {
            throw new Error('Cannot Fetch Data.');
        }
        const data = await response.json();
        return data;
    };

    getTodos()
        .then(data => console.log('Resolved', data))
        .catch(err => console.log('Rejected', err.message));