    document.addEventListener('DOMContentLoaded', () => {
        const API_KEY = '2ba36ea3c4aa8d0350f12c29bec3cfa4';

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
    
            weatherInfo.classList.add('hidden');
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
                
                console.log('RESPONSE = ', response);
                const data = await response.json();
                console.log('DATA = ', data)
    
                if (response.status !== 200) {
                    cityName.textContent = "Город не найден!";
                    weatherInfo.classList.remove('hidden');
                    return;
                } 
                cityName.textContent = `${data.name}`;
                temperature.textContent = `${data.main.temp}°C`;
                description.textContent = data.weather[0].description;
                weatherInfo.style.display = 'block';
    
                weatherInfo.innerHTML = `
                <div class="weather-card">
                    <h2>${data.name}, ${data.sys.country} </h2>
                    <p>Температура: ${data.main.temp}°C</p>
                </div>
                `
                weatherInfo.classList.remove('hidden')
            } catch (error) {
                alert('Произошла ошибка');
            }
        }
    })
    