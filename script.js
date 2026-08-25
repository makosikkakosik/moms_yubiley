const button = document.querySelector("#rsvp-button");
const message = document.querySelector("#rsvp-message");
const celebration = document.querySelector("#celebration");

const symbols = ["✦", "♥", "●", "◆", "✧"];
const colors = ["#f6d28d", "#ffffff", "#d98c9a", "#b3945f", "#f4b6c2"];

button.addEventListener("click", () => {
  celebration.replaceChildren();
  button.classList.remove("confirmed");
  void button.offsetWidth;
  button.classList.add("confirmed");
  button.setAttribute("aria-pressed", "true");
  button.textContent = "Присутствие подтверждено ✦";
  message.textContent = "Спасибо! До скорой встречи!";

  for (let index = 0; index < 80; index += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.textContent = symbols[index % symbols.length];
    particle.style.setProperty("--x", `${Math.random() * 100}%`);
    particle.style.setProperty("--color", colors[index % colors.length]);
    particle.style.setProperty("--size", `${12 + Math.random() * 18}px`);
    particle.style.setProperty("--delay", `${Math.random() * 0.55}s`);
    particle.style.setProperty("--duration", `${2.2 + Math.random() * 1.5}s`);
    particle.style.setProperty("--spin", `${360 + Math.random() * 720}deg`);
    celebration.appendChild(particle);
  }

  window.setTimeout(() => celebration.replaceChildren(), 4300);
});
