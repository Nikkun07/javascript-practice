const key = 'vC4T1EoPj7gzXphwAkascMO2cbUREzvJ';

//Get City Info
const getCity = async (city) => 
{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);

    const data = await response.json();

    return data[0];
};

//Get Weather Information
const getWeather = async (locID) =>
{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locID}?apikey=${key}`;

    const response = await fetch(base + query);

    const data = await response.json();

    return data[0];
};

/* TEST */
// getCity('manila').then(data => 
//     {
//         return getWeather(data.Key);
//     }).then(data => 
//     {
//         console.log(data);
//     })
//     .catch(err => console.log(err));
