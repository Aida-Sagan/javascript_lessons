async function fetchCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results;
    
}

function renderCharacters(characters) {
    const container = document.getElementById('characters');
    container.innerHTML = '';

    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src='${character.image}' alt='${character.name}'>
            <h3>${character.name}</h3>
            <p>Status: ${character.status}</p>
        `;
    })

    container.appendChild(card);
}

document.getElementById('status-filter').addEventListener('change', (event) => {
    const value = event.target.value;
    const filetered = value === 'all' ? allCharacters : allCharacters.filter(char => char.status.toLowerCase() === value);

    renderCharacters(filetered);
})

let allCharacters = [];
async function init() {
    allCharacters = await fetchCharacters();
    renderCharacters(allCharacters);
}

init();