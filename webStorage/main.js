/**
 * Хранение данных в браузере
 * 
 * 1) localStorage - постоянно данные в браузере
 * 2) sessionStorage - пока вкалдка не закрыта 
 * 
 */

// CRUD OPERATIONS - CREATE, READ, UPDATE, DELETE
// СОХРАНЯТЬ ЗНАЧЕНИЕ
// localStorage.setItem('key', 'value');
// localStorage.setItem('username', 'idc');

// // получить значение
// const user = localStorage.getItem('username'); // user = 'idc'
// console.log(user)


// sessionStorage.setItem('theme', 'dark');
// const theme = sessionStorage.getItem('theme');
// console.log(theme)


// const inputName = document.getElementById('nameInput');
// const buttonSave = document.getElementById('saveBtn');
// const greeting = document.getElementById('greeting');

// // загрузить  имя при старте
// let savedName = localStorage.getItem('nickName');
// if (savedName) {
//     greeting.textContent = `Добро пожаловать на страницу, ${savedName}`;
// }

// // save name
// buttonSave.addEventListener('click', () => {
//     const name = inputName.value;
//     localStorage.setItem('nickName', name);
//     greeting.textContent = `Hello, ${name}`;
// })
