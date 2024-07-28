class Forecast
{
    constructor()
    {
        this.key = 'vC4T1EoPj7gzXphwAkascMO2cbUREzvJ';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city)
    {
        const cityInfo = await this.getCity(city);
        const weather = await this.getWeather(cityInfo.Key);
        return {cityInfo,weather}; //Object Shorthand Notation
    }

    async getCity(city)
    {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        return data[0];
    }

    async getWeather(locID)
    {
        const query = `${locID}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        return data[0];
    }
}

/* TEST */
// getCity('manila').then(data => 
//     {
//         return getWeather(data.Key);
//     }).then(data => 
//     {
//         console.log(data);
//     })
//     .catch(err => console.log(err));
