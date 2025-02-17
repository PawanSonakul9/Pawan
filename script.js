const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const loginFormContainer = document.querySelector('.login-form-container');
const registerFormContainer = document.querySelector('.register-form-container');

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

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Add your login logic here

  alert('Login Successful');
});

document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  // Add your registration logic here

  alert('Registration Successful');
});
