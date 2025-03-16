//вариант без async/await
fetch('http://numbersapi.com/random/trivia')
    .then(response => response.text())
    .then(data => console.log('Fact: ', data))
    .catch(error => console.error('Ошибка загрузки: ',error));

//вариант с async/await

async function getFact() {
    try {
        console.log('Загружаем факт о числах ...');
        let response = await fetch('http://numbersapi.com/random/trivia');
        let data = await response.text();

        console.log('Fact:', data)
    } catch(error) {
        console.log('Error!!!!', error);
    }
}

getFact();