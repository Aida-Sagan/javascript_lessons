/* 
let name = 'Andy';
var age = 19;
const iin = '020304234345';

console.log(`Имя человека: ${name}, его возраст: ${age}, его ИИН ${iin}`); 
*/
// однострочный комментарий

// let test;
// console.log(test)


// let test2 = null;
// console.log(test2)


// Тернарный оператор:
// условие ? выржаение_если_истина : выражение_если_ложь

// let age = 15;
// let access = age >= 18 ? 'Доступ разрешен' : 'Доступ запрещен';
// alert(access)

// let num = prompt('введите число:')
// let message = (num % 2 === 0) ? 'четное' : 'нечетное';

// console.log(message)
// alert(message)


// // ДО ОБЬЯВЛЕНИЯ вызываем функцию
// console.log(sayHello('Bob Martin'));

// function sayHello(name) {
//     return `Hello, my dear ${name}`;
// }
// // ПОСЛЕ ОБЬЯВЛЕНИЯ вызываем функцию
// console.log(sayHello('Bob Martin'));

// //Uncaught ReferenceError: can't access lexical declaration 'myFun' before initialization
// console.log(myFun(28));
// const myFun = function(age) {
//     return `My age is ${age}`;
// }

// console.log(myFun(28));

// Callback-функции -- это ФУНКЦИЯ, которая передается в другую функцию как аргумент, и она вызывается ВНУТРИ другой функции ПОСЛЕ 
// выполнения конкретного дейтсве

// официант
// делаешь заказ официанту -- это вызов основной функции
// как блюдо приготовилось, тебе его приносят - это и есть колбэк, который выполнился когда повара приготовили блюдо тебе

// function greet(name){
//     alert(`Hello, ${name}`)
// }
// greet('April')


// // with callbacks
// function greetUser(callback) {
//     let name = prompt('Enter your name')
//     callback(name);
// }

// greetUser(function(name){
//     alert(`Hello, ${name}`)
// })


// function math(num1, num2, callback) {
//     let result = callback(num1, num2);
//     alert(`Result: ${result}`)
// }

// // колбэки для разных операций
// math(2,5, function(num1, num2) {
//     return num1 * num2;
// })


let title = document.getElementById('title');
let changeTextBtn = document.getElementById('changeTextBtn');
let changeColorBtn = document.getElementById('changeColorBtn');

// изменить текст заголовка
changeTextBtn.addEventListener('click', function() {
    title.textContent = 'Hello, Kazakhstan!';
});

changeColorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
});

let change = document.getElementById('change');
change.addEventListener('click', function() {
    title.style.color = 'blue';
    title.style.fontSize = '24px';
})

