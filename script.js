
let counter = 50000;
const counterEl = document.getElementById("counter");
document.getElementById("buyBtn").addEventListener("click", () => {
  if (counter > 0) {
    counter -= 1;
    counterEl.textContent = counter + " ORT";
  }
});

const menu = document.getElementById("menu");
document.getElementById("hamburger").addEventListener("click", () => {
  menu.classList.toggle("active");
});
document.addEventListener("click", function(e) {
  if (!menu.contains(e.target) && e.target.id !== "hamburger") {
    menu.classList.remove("active");
  }
});

function toggleOrtAI() {
  const ortai = document.getElementById("ortai");
  ortai.style.display = ortai.style.display === "none" ? "block" : "none";
}

// MetaMask bağlanma
document.getElementById("walletBtn").addEventListener("click", async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Wallet connected");
      alert("Wallet connected!");
    } catch (err) {
      console.error("Connection error", err);
    }
  } else {
    alert("MetaMask not found!");
  }
});
