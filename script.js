function updateClock() {
  const now = new Date();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());

  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
