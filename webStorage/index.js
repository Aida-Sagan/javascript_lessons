
const inputHabit = document.getElementById('habitInput');
const addHabitBtn = document.getElementById('addHabbitBtn');
const habitList = document.getElementById('habitList');
const resetBtn = document.getElementById('resetBtn')

let habits = JSON.parse(localStorage.getItem('habits')) || [];

// написать функци по сохранению привычки
function saveHabit() {
    localStorage.setItem('habits', JSON.stringify(habits));
}

function renderHabits() {
    habitList.innerHTML = '';
    habits.forEach((habit, index) => {
        // создать динамически тег li
        // заполнить динамически этот тег li
        const li = document.createElement('li');
        li.textContent = habit.name;

        if(habit.completedToday) {
            li.classList.add('completed');
            li.textContent += '(выполнено)';
        }

        habitList.appendChild(li);

    })
}


addHabitBtn.addEventListener('click', () => {
    const habitName = inputHabit.value.trim();
    console.log(habitName);
    if(habitName) {
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
