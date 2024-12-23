// Importa desde los módulos de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDtsucKpRpy_pUWqH1aODH3UhAaab41TqQ",
  authDomain: "systemf-5f49e.firebaseapp.com",
  projectId: "systemf-5f49e",
  storageBucket: "systemf-5f49e.appspot.com",
  messagingSenderId: "1089795620807",
  appId: "1:1089795620807:web:7918d8c018a42838caa3e2",
  measurementId: "G-K3R54THP7J"
};

// Inicializa Firebase y los servicios que necesitas
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Manejar el formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("message");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    messageElement.textContent = "Inicio de sesión exitoso. Redirigiendo...";
    window.location.href = "https://carlos-lopez-c.github.io/cartaFC/";
  } catch (error) {
    messageElement.textContent = `Error: ${error.message}`;
  }
});

// fernanda@gmail.com
// Fernanda