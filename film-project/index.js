const movies = [
  { title: "Интерстеллар", genre: "драма", year: 2014 },
  { title: "Матрица", genre: "боевик", year: 1999 },
  { title: "1+1", genre: "комедия", year: 2011 },
  { title: "Начало", genre: "боевик", year: 2010 },
  { title: "Остров проклятых", genre: "драма", year: 2010 },
  { title: "Криминальное чтиво", genre: "драма", year: 1994 },
  { title: "Маска", genre: "комедия", year: 1994 },
];

const search = document.getElementById('search');
const select = document.getElementById('genreFilter');
const reset = document.getElementById('reset');
const moviesContainer = document.getElementById('moviesContainer');


// функция которая отвечает за отображение фильмов на странице
function showMovies(data) {
    moviesContainer.innerHTML = '';
    if(data.length === 0){
        moviesContainer.innerHTML = "<p class='descr'>Нет фильмов в прокате!</p>"
    }

    data.forEach(movie => {
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        h4.textContent =  movie.title;
        const p = document.createElement('p');
        p.textContent = `${movie.genre}, ${movie.year}`;

        div.appendChild(h4);
        div.appendChild(p);
        moviesContainer.appendChild(div);
    })
}
 showMovies(movies); 

// filter
select.addEventListener('change', () => {
    const genre = select.value;
    const filtered = genre === 'all' ? movies : movies.filter((movie) => movie.genre === genre);
    
    showMovies(filtered);        
})

search.addEventListener('input', () => {
    const query = search.value.toLowerCase().trim();

    let found = movies.find(movie => movie.title.toLocaleLowerCase().includes(query))
        
    if(found){
        showMovies([found])
    }else{
        showMovies([])
    }

})

reset.addEventListener('click', ()=> {
    search.value = '';
    select.value = 'all';
    showMovies(movies);
})