
let counter = 500000;

function updateCounter(amount) {
  counter -= amount;
  let el = document.getElementById("coinCounter");
  let start = parseInt(el.innerText);
  let end = counter;

  let current = start;
  let step = (start - end) / 20;
  let interval = setInterval(() => {
    current -= step;
    if (current <= end) {
      current = end;
      clearInterval(interval);
    }
    el.innerText = Math.floor(current) + " ORT";
  }, 50);
}

// simulate a coin purchase
setTimeout(() => updateCounter(1500), 3000);
