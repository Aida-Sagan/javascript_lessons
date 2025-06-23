const books = [
  { title: "1984", author: "Джордж Оруэлл", genre: "фантастика", year: 1949 },
  { title: "Преступление и наказание", author: "Фёдор Достоевский", genre: "роман", year: 1866 },
  { title: "Гарри Поттер и узник Азкабана", author: "Джоан Роулинг", genre: "фантастика", year: 1999 },
  { title: "Десять негритят", author: "Агата Кристи", genre: "детектив", year: 1939 },
  { title: "Космос", author: "Карл Саган", genre: "научная литература", year: 1980 },
  { title: "Тень горы", author: "Грегори Дэвид Робертс", genre: "роман", year: 2015 },
  { title: "Дюна", author: "Фрэнк Герберт", genre: "фантастика", year: 1965 },
];

const book_search = document.getElementById('book-search');
const select = document.getElementById('select-genre');
const reset = document.getElementById('reset-btn');
const books_shelf = document.getElementById('books-shelf');


function showBooks(books) {
    books_shelf.innerHTML = '';

    if(books.length === 0) {
        books_shelf.innerHTML = "<p>Книги не найдены</p>";
    }

    books.forEach((book) => {
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        h4.textContent = book.title;
        const p = document.createElement('p');
        p.textContent = `${book.author}, ${book.genre}, ${book.year}`;

        div.classList.add('book-card')
        div.appendChild(h4);
        div.appendChild(p);
        books_shelf.appendChild(div);
    })
}

showBooks(books);

select.addEventListener('change', () => {
    const genre = select.value;
    const filtered = genre === 'all' ? books : books.filter(book => book.genre === genre);

    showBooks(filtered);
})

book_search.addEventListener('input', () => {
    const query = book_search.value.toLowerCase().trim();

    let found = books.find(book => book.title.toLocaleLowerCase().includes(query));
    if(found) {
        showBooks([found]);
    } else {
        showBooks([]);
    }

})


reset.addEventListener('click', () => {
    select.value ='all';
    book_search.value = '';
    showBooks(books);
})
