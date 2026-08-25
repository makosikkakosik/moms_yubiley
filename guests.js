import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import { collection, getFirestore, onSnapshot, orderBy, query } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
import { firebaseConfig, isFirebaseConfigured } from "./firebase-config.js";

const loginView = document.querySelector("#login-view");
const dashboardView = document.querySelector("#dashboard-view");
const loginForm = document.querySelector("#login-form");
const loginStatus = document.querySelector("#login-status");
const listStatus = document.querySelector("#list-status");
const guestList = document.querySelector("#guest-list");
const guestCount = document.querySelector("#guest-count");
const logoutButton = document.querySelector("#logout-button");

if (!isFirebaseConfigured) {
  loginStatus.textContent = "Сначала добавьте настройки Firebase в файл firebase-config.js.";
  loginForm.querySelector("button").disabled = true;
} else {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  let stopListening = null;

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = loginForm.querySelector("button");
    button.disabled = true;
    loginStatus.textContent = "Входим…";

    try {
      await signInWithEmailAndPassword(
        auth,
        document.querySelector("#admin-email").value.trim(),
        document.querySelector("#admin-password").value
      );
      loginForm.reset();
    } catch (error) {
      console.error("Ошибка входа:", error);
      loginStatus.textContent = "Неверная почта или пароль.";
    } finally {
      button.disabled = false;
    }
  });

  logoutButton.addEventListener("click", () => signOut(auth));

  onAuthStateChanged(auth, (user) => {
    if (stopListening) {
      stopListening();
      stopListening = null;
    }

    loginView.hidden = Boolean(user);
    dashboardView.hidden = !user;
    loginStatus.textContent = "";

    if (!user) return;

    listStatus.textContent = "Загружаем список…";
    const guestsQuery = query(collection(db, "guests"), orderBy("createdAt", "desc"));
    stopListening = onSnapshot(guestsQuery, (snapshot) => {
      guestList.replaceChildren();
      guestCount.textContent = String(snapshot.size);
      listStatus.textContent = snapshot.empty ? "Пока никто не подтвердил присутствие." : "";

      snapshot.forEach((guestDocument) => {
        const guest = guestDocument.data();
        const item = document.createElement("li");
        const name = document.createElement("span");
        const date = document.createElement("time");
        name.className = "guest-name";
        date.className = "guest-date";
        name.textContent = guest.name;
        date.textContent = guest.createdAt?.toDate
          ? guest.createdAt.toDate().toLocaleString("ru-RU", { day:"numeric", month:"short", hour:"2-digit", minute:"2-digit" })
          : "только что";
        item.append(name, date);
        guestList.append(item);
      });
    }, (error) => {
      console.error("Не удалось загрузить список:", error);
      listStatus.textContent = "Нет доступа к списку. Проверьте UID администратора в правилах Firestore.";
    });
  });
}
