// Вставьте сюда конфигурацию веб-приложения из Firebase Console.
// Firebase config можно безопасно размещать во frontend-коде: доступ защищают firestore.rules.
export const firebaseConfig = {
  apiKey: "AIzaSyAxX7-h7h2OalHgHF0reJbXK8rTdTRtRj8",
  authDomain: "yubiley-44408.firebaseapp.com",
  projectId: "yubiley-44408",
  storageBucket: "yubiley-44408.firebasestorage.app",
  messagingSenderId: "79478054447",
  appId: "1:79478054447:web:fcb71e1a20e77f3d8570da",
  measurementId: "G-W7CNQ3N4TG"
};

export const isFirebaseConfigured = !Object.values(firebaseConfig).some((value) => value.startsWith("PASTE_"));
