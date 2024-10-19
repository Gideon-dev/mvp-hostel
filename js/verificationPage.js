document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.code-input');
  
    inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        if (input.value.length === 1) {
          // Move to next input when a digit is entered
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }
      });
  
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '') {
          // Move to the previous input when backspace is pressed
          if (index > 0) {
            inputs[index - 1].focus();
          }
        }
      });
  
      input.addEventListener('paste', (e) => {
        // Handle pasting a full code 
        const paste = e.clipboardData.getData('text').slice(0, inputs.length);
        inputs.forEach((input, i) => {
          input.value = paste[i] || '';
        });
        e.preventDefault();
      });
    });

    function handleInputBackground(inputElement) {

        
        if (inputElement.value.trim() !== "") {
          inputElement.classList.add("input-has-value");
         
        } else {
          inputElement.classList.remove("input-has-value");
      
        }
    }
      
    document.querySelectorAll('input[type="text"]').forEach(function(inputElement) {
        handleInputBackground(inputElement);
      
        
        inputElement.addEventListener('input', function() {
          handleInputBackground(inputElement);
        });
    });
  
 
    // const form = document.getElementById('verificationForm');
    // form.addEventListener('submit', function(event) {
    //   event.preventDefault();
      
      
    //   let verificationCode = '';
    //   inputs.forEach(input => {
    //     verificationCode += input.value;
    //   });
  
  
    //   console.log('Verification code entered:', verificationCode);
      
      
    // });
  });
  