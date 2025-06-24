/**
 * Хранение данных в браузере
 * 
 * 1) localStorage - постоянное хранение данных в браузере
 * 2) sessionStorage - пока вкладка не закрыта
 * 
 */

//CRUD OPERATIONS - CREATE, READ, UPDATE, DELETE
// СОХРАНЯТЬ ЗНАЧЕНИЕ
/* localStorage.setItem('key', 'value');
localStorage.setItem('username', 'idc');

// получить значение
const user = localStorage.getItem('username'); // user = 'idc'
console.log(user);


sessionStorage.setItem('theme', 'dark');
const theme = sessionStorage.getItem('dark');
console.log(theme);


const inputName = document.getElementById('nameInput');
const buttonSave = document.getElementById('saveBtn');
const greeting = document.getElementById('greeting');

// загрузить имя при старте
const savedName = localStorage.getItem('nickName');

if (savedName) {
    greeting.textContent = `Добро пожаловать на страницу, ${savedName}`;
}

buttonSave.addEventListener('click', () => {
    const name = inputName.value;
    localStorage.setItem('nickName', name);
    greeting.textContent = `Hello, ${name}`;
}) */


const inputHabit = document.getElementById('habitInput');
const addHabitBtn = document.getElementById('addHabitBtn');
const habitList = document.getElementById('habitList');
const resetBtn = document.getElementById('resetBtn');

let habits = JSON.parse(localStorage.getItem('habits')) || [];

//функция по сохранению привычки

function saveHabit() {
    localStorage.setItem('habits', JSON.stringify(habits));
}

function renderHabits() {
    habitList.innerHTML = '';

    habits.forEach((habit, index) => {
        const li = document.createElement('li');
        li.textContent = habit.name;
        if (habit.completedToday) {
            li.classList.add('completed');
            li.textContent += '(выполнено)';
        }

        habitList.appendChild(li);
    })
}

addHabitBtn.addEventListener('click', () => {
    const habitName = inputHabit.value.trim();
    if (habitName) {
        habits.push({
            name: habitName,
            completedToday: false
        })
        saveHabit();
        renderHabits();
        inputHabit.value = '';
    }
})

resetBtn.addEventListener('click', () => {
    habits.forEach(h => h.completedToday = false);
    saveHabit();
    renderHabits();
})

renderHabits();