//DOM Manipulation

const cityFormInput = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();


//UI Update
const updateUI = (data) =>
{

    // console.log(data);
    // const cityInfo = data.cityInfo;
    // const weather = data.weather;

    //Destructuring Properties
    const {cityInfo, weather} = data;

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
    
    
    //Update Icon Images & Day/Night Image
    const iconSrc = `icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);


    /* Ternary Operator */
    let timeSrc = weather.IsDayTime ? 'icons/day.svg' : 'icons/night.svg';
    
    // if(weather.IsDayTime)
    // {
    //     timeSrc = 'icons/day.svg';
    // }
    // else
    // {
    //     timeSrc = 'icons/night.svg';
    // }

    time.setAttribute('src', timeSrc);

    //Show Card
    if(card.classList.contains('d-none'))
    {
        card.classList.remove('d-none');
    }
}


//City Input 
cityFormInput.addEventListener('submit', e =>
{
    //prevent default action
    e.preventDefault();

    //get city value
    const cityLoc = cityFormInput.city.value.trim();
    cityFormInput.reset();

    //update UI
    forecast.updateCity(cityLoc)
        .then(data => updateUI(data))
        .catch(er => console.log(err));

    //set Local Storage
    localStorage.setItem('City', cityLoc);
});

if(localStorage.getItem('City'))
{
    forecast.updateCity(localStorage.getItem('City'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}