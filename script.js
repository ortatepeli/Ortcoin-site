
// Basit geri sayım
const countdownDate = new Date("2025-06-01T00:00:00").getTime();
const timerElement = document.getElementById("timer");

setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    if (distance < 0) {
        timerElement.innerText = "ICO Started!";
        return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    timerElement.innerText = `${days} days ${hours} hours`;
}, 1000);
