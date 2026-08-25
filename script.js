import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { addDoc, collection, getFirestore, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
import { firebaseConfig, isFirebaseConfigured } from "./firebase-config.js?v=2";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#rsvp-form");
  const button = document.querySelector("#rsvp-button");
  const nameInput = document.querySelector("#guest-name");
  const message = document.querySelector("#rsvp-message");
  const celebration = document.querySelector("#celebration");
  const symbols = ["✦", "♥", "●", "◆", "✧"];
  const colors = ["#f6d28d", "#ffffff", "#d98c9a", "#b3945f", "#f4b6c2"];

  if (!form || !button || !nameInput || !message || !celebration) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const guestName = nameInput.value.trim().replace(/\s+/g, " ");

    if (guestName.length < 2) {
      message.textContent = "Пожалуйста, напишите ваше имя.";
      nameInput.focus();
      return;
    }

    if (!isFirebaseConfigured) {
      message.textContent = "Форма пока настраивается. Попробуйте немного позже.";
      return;
    }

    button.disabled = true;
    button.textContent = "Отправляем…";
    message.textContent = "";

    try {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      await addDoc(collection(db, "guests"), {
        name: guestName,
        createdAt: serverTimestamp()
      });

      form.reset();
      celebrate();
    } catch (error) {
      console.error("Не удалось сохранить подтверждение:", error);
      button.disabled = false;
      button.textContent = "Подтвердите ваше присутствие";
      message.textContent = "Не получилось отправить. Проверьте интернет и попробуйте ещё раз.";
    }
  });

  function celebrate() {
    celebration.replaceChildren();
    button.classList.remove("confirmed");
    void button.offsetWidth;
    button.classList.add("confirmed");
    button.disabled = true;
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

    window.setTimeout(() => {
      celebration.replaceChildren();
      button.disabled = false;
      button.classList.remove("confirmed");
      button.textContent = "Подтвердить ещё одного гостя";
    }, 4300);
  }
});
