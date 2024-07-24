//DOM Manipulation

const cityFormInput = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) =>
{
    const cityInfo = data.cityInfo;
    const weather = data.weather;

    //update Details Template
    details.innerHTML = 
    `
        <h5 class="my-3">${cityInfo.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //Show Card
    if(card.classList.contains('d-none'))
    {
        card.classList.remove('d-none');
    }
}


const updateCity = async (city) =>
{
    const cityInfo = await getCity(city);
    const weather = await getWeather(cityInfo.Key);

    return {cityInfo,weather}; //Object Shorthand Notation
};


cityFormInput.addEventListener('submit', e =>
{
    //prevent default action
    e.preventDefault();

    //get city value
    const cityLoc = cityFormInput.city.value.trim();
    cityFormInput.reset();

    //update UI
    updateCity(cityLoc)
        .then(data => updateUI(data))
        .catch(er => console.log(err));
})