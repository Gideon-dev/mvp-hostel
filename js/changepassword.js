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

})