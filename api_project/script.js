const date = document.getElementById('date');
const spaceImg = document.getElementById('space_img');
const explanation = document.getElementById('explanation');
const loadBtn = document.getElementById('loadBtn');
const searchPlanet = document.getElementById('searchPlanet');
const planetMass = document.getElementById('planetMass');
const planetRadius = document.getElementById('planetRadius');
const planetTemp = document.getElementById('planetTemp');
const showPlanetBtn = document.getElementById('showPlanetBtn');

loadBtn.addEventListener('click', loadAll);

async function loadAll() {
    try{
        const data = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(res => res.json());
        date.textContent = data.date;
        spaceImg.src = data.hdurl;
        explanation.textContent = data.explanation;
    } catch (err) {
        date.textContent = "Данные не прогрузились";
        spaceImg.alt = "Данные не прогрузились";
        explanation.textContent = "Данные не прогрузились";
    }
}

showPlanetBtn.addEventListener('click', showPlanetInfo);

async function showPlanetInfo() {
    try {
        const planetName = searchPlanet.value.trim();
        const response = await fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
            headers: { 'X-Api-Key': 'tOWlFaUAjMVuj6yrw7WAYQ==bhvzvnpMMxTBQyMK' }
        });
        const data = await response.json();

        if (data.length > 0) {
            planetMass.textContent = `Mass: ${data[0].mass}`;
            planetRadius.textContent = `Radius: ${data[0].radius}`;
            planetTemp.textContent = `Temperature: ${data[0].temperature}`;
        } else {
            planetMass.textContent = '-';
            planetRadius.textContent = '-';
            planetTemp.textContent = '-';
        }
    } catch (err) {
        planetMass.textContent = '-';
        planetRadius.textContent = '-';
        planetTemp.textContent = '-';
    }
}


/** https://api.api-ninjas.com/v1/planets */