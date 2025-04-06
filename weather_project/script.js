
document.addEventListener("DOMContentLoaded", () => {
    const API_KEY = '2ba36ea3c4aa8d0350f12c29bec3cfa4';

    const searchBtn = document.getElementById("searchBtn");
    const cityInput = document.getElementById("cityInput");
    const weatherInfo = document.getElementById("weatherInfo");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const loader = document.createElement("div");
    loader.classList.add("loader");
    document.body.appendChild(loader);

    searchBtn.addEventListener("click", async () => {
        const city = cityInput.value.trim();
        if (city === "") return;

        loader.style.display = "block";
        weatherInfo.classList.add("hidden");

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
            );
            const data = await response.json();

            if (response.status !== 200) {
                cityName.textContent = "Город не найден!";
                weatherInfo.classList.remove("hidden");
                loader.style.display = "none";
                return;
            }

            cityName.textContent = `${data.name}, ${data.sys.country}`;
            temperature.innerHTML = `🌡 Температура: <strong>${Math.round(data.main.temp)}°C</strong>`;
            description.innerHTML = `🌥 Описание: <strong>${data.weather[0].description}</strong>`;

            // Дополнительные параметры
            weatherInfo.innerHTML = `
                <div class="weather-card">
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">
                    <p>🌡 Температура: <strong>${Math.round(data.main.temp)}°C</strong></p>
                    <p>💨 Ветер: <strong>${data.wind.speed} м/с</strong></p>
                    <p>💧 Влажность: <strong>${data.main.humidity}%</strong></p>
                    <p>⚡ Давление: <strong>${data.main.pressure} hPa</strong></p>
                </div>
            `;

            weatherInfo.classList.remove("hidden");
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        } finally {
            loader.style.display = "none";
        }
    });

    
});
