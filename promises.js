// синхронный код
/* console.log('Приветствие!')
let a = 50 + 100;
console.log(a)
console.log('Bye!')

// асинхронный код
console.log('Приветствие !!!')

setTimeout( () => {
    console.log('смс в setTimeout через 3 секунды')
}, 3000);

console.log('POKA!') */

// console.log('Заказываем пиццу ...');

// const pizzaOrder = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         let success = Math.random() > 0.5;

//         if(success) {
//             resolve('Ура! Пицца доставлена!!!');
//         } else {
//             reject(':( ошибка: курьер потерялся....');
//         }
//     }, 4000)
// }) 

// pizzaOrder.then( (message) => {
//     console.log(message)
// })

// /**
//  * then(message => console.log(message))
//  */

// pizzaOrder.catch(error => console.error(error));
// pizzaOrder.finally(() => console.log('ПРиятного аппетита!'));

// console.log('Продолжаем делать другие дела ....')

const loadBox = new Promise( (resolve, reject) => {
    let success = Math.random() > 0.5;

    setTimeout( () => {
        // тернарный оператор
        success ? resolve('Коробка открыта!!!') : reject('Ууупс, коробка пустая :(');
    }, 2000);
})

loadBox.then(console.log)
loadBox.catch(console.error)