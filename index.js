var form = document.getElementById('js-form');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
var messageDiv = document.createElement('div');
var emailPattern = /@/;
document.body.appendChild(messageDiv);

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!email.value) {
    messageDiv.textContent = 'Please enter an email address';
  }
  else if (!password.value || !confirmPassword.value) {
    messageDiv.textContent = 'Please enter a password';
  }
  else if (emailPattern.test(email.value) === false) {
    messageDiv.textContent = 'Please enter a valid email address';
  }
  else if (password.value !== confirmPassword.value) {
    messageDiv.textContent = 'Passwords you\'ve entered do not match';
  }
  else {
    messageDiv.textContent = '';
  }
});

email.addEventListener('blur', function(event) {
  if (!email.value) {
    messageDiv.textContent = 'Please enter an email address';
  }
  else if (emailPattern.test(email.value) === false) {
    messageDiv.textContent = 'Please enter a valid email address';
  }
  else {
    messageDiv.textContent = '';
  }
});

password.addEventListener('blur', function(event) {
  if (!password.value) {
    messageDiv.textContent = 'Please enter a password';
  }
  else {
    messageDiv.textContent = '';
  }
});

confirmPassword.addEventListener('blur', function(event) {
  if (!confirmPassword.value) {
    messageDiv.textContent = 'Please enter a password';
  }
  else if (password.value !== confirmPassword.value) {
    messageDiv.textContent = 'Passwords you\'ve entered do not match';
  }
  else {
    messageDiv.textContent = '';
  }
  
});
