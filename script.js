import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = window.firebaseAuth; // Get Firebase authentication from index.html

const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const loginFormContainer = document.querySelector('.login-form-container');
const registerFormContainer = document.querySelector('.register-form-container');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');

// Toggle between login and register forms
showRegister.addEventListener('click', () => {
  loginFormContainer.style.display = 'none';
  registerFormContainer.style.display = 'block';
  registerFormContainer.style.animation = 'fadeIn 0.5s forwards';
});

showLogin.addEventListener('click', () => {
  registerFormContainer.style.display = 'none';
  loginFormContainer.style.display = 'block';
  loginFormContainer.style.animation = 'fadeIn 0.5s forwards';
});

// Login Function
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert('Login Successful');
    console.log('Logged in user:', userCredential.user);
  } catch (error) {
    loginError.textContent = error.message; // Display error message
    loginError.style.color = 'red';
  }
});

// Register Function
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert('Registration Successful');
    console.log('Registered user:', userCredential.user);
  } catch (error) {
    registerError.textContent = error.message; // Display error message
    registerError.style.color = 'red';
  }
});
