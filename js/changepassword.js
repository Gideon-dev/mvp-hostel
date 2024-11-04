const form = document.getElementById('change-password-form');
const feedbackMessage = document.getElementById('feedback-message');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // const currentPassword = form.currentPassword.value;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;
    if (newPassword !== confirmPassword) {
        feedbackMessage.textContent = "New passwords do not match!";
        return;
    }else{
        feedbackMessage.textContent = "New password saved !";
    }

});


const passwordInputs = document.querySelectorAll(".p-input");

passwordInputs.forEach((input)=> {
    const togglePassword = input.parentNode.querySelector(".toggle-password");
    const eyeOpenIcon = input.parentNode.querySelector(".eye-open");
    const eyeCloseIcon = input.parentNode.querySelector(".eye-close");
//    console.log(input.parentNode.querySelector(".toggle-password"));

   togglePassword.addEventListener("click", () => {
    const type = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);

    if (type === "password") {
      eyeOpenIcon.style.display = "inline";
      eyeCloseIcon.style.display = "none";
    } else {
      eyeOpenIcon.style.display = "none";
      eyeCloseIcon.style.display = "inline";
    }
  });
   
})

