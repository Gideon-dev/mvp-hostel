document.addEventListener('DOMContentLoaded', function () {
  const toggleIcons = document.querySelectorAll('.toggle-password');

  document.querySelectorAll('input[type="password"]').forEach(input => {

    handleInputBackground(input);

    input.addEventListener('input', function () {
      handleInputBackground(input);
    });
  });

  
  toggleIcons.forEach(toggleIcon => {
    toggleIcon.addEventListener('click', function () {
      const passwordInput = this.parentElement.querySelector('.password');
      const eyeOpenIcon = this.querySelector('.eye-open');
      const eyeCloseIcon = this.querySelector('.eye-close');
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);

      if (type === 'password') {
        eyeOpenIcon.style.display = 'inline';
        eyeCloseIcon.style.display = 'none';
      } else {
        eyeOpenIcon.style.display = 'none';
        eyeCloseIcon.style.display = 'inline';
      }
    });
  
  })

});

function handleInputBackground(inputElement) {
  if (inputElement.value.trim() !== "") {
      inputElement.classList.add("input-has-value");
  } else {
    inputElement.classList.remove("input-has-value");
  }
}

document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const newPasswordError = document.getElementById('new-password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
  
   
    newPasswordError.textContent = "";
    confirmPasswordError.textContent = "";
  
    
    if (newPassword.length < 8) {
      newPasswordError.textContent = "Password must be at least 8 characters long.";
      return;
    }
  
    if (newPassword !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      return;
    }
  
    
    // console.log("New password:", newPassword);
    // console.log("Confirmed password:", confirmPassword);
  
});
