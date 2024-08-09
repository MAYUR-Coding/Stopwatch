let timer;
let timerRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

const display = document.querySelector('.display');
const startStopBtn = document.getElementById('startStop');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function startStop() {
    if (timerRunning) {
        clearInterval(timer);
        timerRunning = false;
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(updateTimer, 1000);
        timerRunning = true;
        startStopBtn.textContent = 'Stop';
    }
}

function stopTimer() {
    clearInterval(timer);
    timerRunning = false;
    startStopBtn.textContent = 'Start';
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.textContent = '00:00:00';
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

startStopBtn.addEventListener('click', startStop);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
