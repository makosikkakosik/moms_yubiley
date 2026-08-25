// Вставьте сюда конфигурацию веб-приложения из Firebase Console.
// Firebase config можно безопасно размещать во frontend-коде: доступ защищают firestore.rules.
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY_HERE",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
  appId: "PASTE_APP_ID"
};

export const isFirebaseConfigured = !Object.values(firebaseConfig).some((value) => value.startsWith("PASTE_"));
