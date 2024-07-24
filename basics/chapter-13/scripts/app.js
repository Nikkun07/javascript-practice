//DOM Manipulation

const cityFormInput = document.querySelector('form');
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
        .then(data =>console.log(data))
        .catch(er => console.log(err));
})