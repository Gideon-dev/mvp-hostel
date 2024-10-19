document.addEventListener('DOMContentLoaded', function () {
    const inputElem = document.querySelector('input[type="password"]');
    if (inputElem) {
      handleInputBackground(inputElem);
  
      inputElem.addEventListener('input', function () {
        handleInputBackground(inputElem);
      });
    }
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
  