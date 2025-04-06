const API_KEY = '122a92b65cb76d5984e4f87238d719e7';

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim(); // trim() removes whitespace from both ends of a string
    if (city) {
        getWeather(city);
    } else {
        alert('Пожалуйста введите название города');
    }
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        if (data.cod === '404') {
            alert('Город не найден');
        } else {
            cityName.textContent = data.name;
            temperature.textContent = `${data.main.temp}°C`;
            description.textContent = data.weather[0].description;
            weatherInfo.style.display = 'block';
        }
    } catch (error) {
        alert('Произошла ошибка');
    }
}