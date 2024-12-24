const countdownElement = document.getElementById("countdown");
const celebrateBtn = document.getElementById("celebrate-btn");
const fireworksContainer = document.getElementById("fireworks");

function calculateCountdown() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
  const diff = newYear - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function updateCountdown() {
  const { days, hours, minutes, seconds } = calculateCountdown();

  countdownElement.textContent = `Time until New Year: 
  ${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    countdownElement.textContent = "Happy New Year 🎉🎊!";
  }
}

function createFirework() {
  const firework = document.createElement("div");
  firework.classList.add("firework");
  firework.style.left = `${Math.random() * 100}vw`;
  firework.style.top = `${Math.random() * 100}vh`;
  fireworksContainer.appendChild(firework);

  setTimeout(() => firework.remove(), 3000);
}

function triggerFireworks() {
  setInterval(createFirework, 300);
}

celebrateBtn.addEventListener("click", () => {
  triggerFireworks();
});

setInterval(updateCountdown, 1000);

updateCountdown();
