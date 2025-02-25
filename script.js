import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Get Firebase authentication from index.html
const auth = window.auth;  

const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const loginFormContainer = document.querySelector('.login-form-container');
const registerFormContainer = document.querySelector('.register-form-container');

// Toggle between login and register forms
showRegister.addEventListener('click', () => {
  loginFormContainer.style.display = 'none';
  registerFormContainer.style.display = 'block';
});

showLogin.addEventListener('click', () => {
  registerFormContainer.style.display = 'none';
  loginFormContainer.style.display = 'block';
});

// Login Function
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const loginError = document.getElementById('login-error');

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
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const registerError = document.getElementById('register-error');

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert('Registration Successful');
    console.log('Registered user:', userCredential.user);
  } catch (error) {
    registerError.textContent = error.message; // Display error message
    registerError.style.color = 'red';
  }
});
