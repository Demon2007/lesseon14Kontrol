let totalSeconds = 59 * 3600 + 59 * 60 + 59; // начальное значение: 59:59:59

function updateTimer() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

  if (totalSeconds > 0) {
    totalSeconds--;
  }
}

updateTimer(); // первый вызов
setInterval(updateTimer, 1000);