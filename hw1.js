/**
 * 3️⃣ 🧡Таймер обратного отсчета с кнопкой "Старт":
Реализовать простой таймер, который считает от 10 до 0 при нажатии на кнопку.
 */

function startCountdown() {
    let timeLeft = 10;
    let timerElement = document.getElementById('timer');

    let countDown = setInterval(() => {
        timerElement.textContent = timeLeft;

        if(timeLeft === 0) {
            clearInterval(countDown);
            alert('Таймер завершен!!!')
        }
        timeLeft--;
    }, 1000)
}