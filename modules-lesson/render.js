export function renderCharacters(characters) {
    const container = document.getElementById('characters');
    container.innerHTML = '';

    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src='${character.image}' alt='${character.name}'>
            <h3>${character.name}</h3
            <p>Status: ${character.status}</p>
        `;

        container.appendChild(card);
    })

}