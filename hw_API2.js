//вариант без async/await
fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
        console.log('Exchange rate:');
        let count = 0;
        for (let key in data.rates) {
            console.log(`${key}: ${data.rates[key]}`);
            count++;
            if (count > 5) {
                break;
            }
        }
    })
    .catch(error => console.error('Ошибка загрузки: ',error));

//вариант с async/await
async function get5Currency() {
    try {
        console.log('Загружаем курсы валют ...');
        let response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        let data = await response.json();

        console.log('Exchange rate: ');
        let count = 0;
        for (let key in data.rates) {
            console.log(`${key}: ${data.rates[key]}`);
            count++;
            if (count > 5) {
                break;
            }
        }
    } catch(error) {
        console.log('Error!!!!', error);
    }
}

get5Currency();