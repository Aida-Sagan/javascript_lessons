// setTimeout - асинхронная функция
// JS выполняет сначала синхронный код(console.log), а потом выполняет асинхронный
// console.log('1. Start');

// setTimeout(() => {
//     console.log('2. It will work later');
// }, 2000);

// console.log('3. Finish');

console.log('A');

setTimeout(() => console.log('B'), 1000);
setTimeout(() => console.log('C'), 500);
console.log('D');
// a d c b

/**
 * Вывести в коносли в таком порядке
 * Привет!
 * (через 1 секунду) Как дела?
 * (еще через 1 секунду) Пока!
 */