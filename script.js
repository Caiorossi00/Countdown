document.addEventListener("DOMContentLoaded", function () {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("mins");
  const secondsEl = document.getElementById("seconds");

  const copa_26 = "11 Jun 2026";

  function countdown() {
    const copa_26Data = new Date(copa_26);
    const dataHoje = new Date();

    const totalSeconds = Math.floor((copa_26Data - dataHoje) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
  }

  countdown();

  setInterval(countdown, 1000);
});

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
