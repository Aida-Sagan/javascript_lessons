const users = [
  { name: 'Anna', age: 22 },
  { name: 'Boris', age: 27 },
  { name: 'Ivan', age: 30 }
]
//1. Найти пользователей старше 25 лет и вернуть их имена в верхнем регистре

const users25 = users.filter(user => user.age > 25);
const upperUsers = users25.map(user => user.name.toUpperCase());
// console.log(upperUsers);

/**
 2. Вернуть новый массив без повторяющихся значений

[1, 2, 3, 2, 4, 1, 5];
ответ
[1, 2, 3, 4, 5]

 */

let arr1 = [1, 2, 3, 2, 4, 1, 5];
let new_arr = arr1.filter((el, i) => arr1.indexOf(el) === i);
// console.log(new_arr);


/*
3. Найти первую задачу, которая ещё не завершена
*/

const tasks = [
  { title: 'Fix bug', done: true },
  { title: 'Write docs', done: false },
  { title: 'Deploy', done: false }
];

const notDoneTask = tasks.find(task => task.done === true);
console.log(notDoneTask);

/* 4.
Объединить два массива заказов и оставить только уникальные ID
*/
const ordersA = [101, 102, 103];
const ordersB = [103, 104, 105];

const ordersAB = [...ordersA, ...ordersB];
const uniqueOrdersAB = ordersAB.filter((el, i) => ordersAB.indexOf(el) === i);
console.log(uniqueOrdersAB);

/* Task: Вернуть последние 3 элемента массива сообщений*/
const messages = ['Hi', 'How are you?', 'Ping', 'Pong', 'Bye'];
const last3messages = messages.slice(-5); // -3 
console.log(last3messages);


//Task : Проверить, есть ли хотя бы один товар дороже 1000 tg
const products = [
  { name: 'Phone', price: 900 },
  { name: 'Tablet', price: 1200 },
  { name: 'Laptop', price: 5000 }
];

const productMore1000 = products.filter(product => product.price > 1000);
console.log(productMore1000);

//
console.log('Привет!');
setTimeout(() => console.log('Как дела?'), 1000);
setTimeout(() => console.log('Пока!'), 2000);