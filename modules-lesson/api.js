export async function fetchCharacters() {
    console.log('Fetching characters...');
    const response = await fetch('https://rickandmortyapi.com/api/character')
    console.log(response);
    const data = await response.json();
    return data.results;
}