let intervalId;
let startTime = 0;
let elapsedTime = 0;
const display = document.getElementById('display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

function startStopwatch() {
  startTime = new Date().getTime() - elapsedTime;
  intervalId = setInterval(updateDisplay, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopStopwatch() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetStopwatch() {
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  display.innerText = '00:00:00';
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function updateDisplay() {
  const currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  display.innerText = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(time) {
  return (time < 10 ? '0' : '') + time;
}