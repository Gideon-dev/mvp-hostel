// Function to toggle dropdown visibility on click or keypress (Enter/Space)
document.querySelectorAll('.select-selected').forEach(function(dropdown) {
  dropdown.addEventListener('click', function() {
    toggleDropdown(this);
  });

  dropdown.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default spacebar scrolling
      toggleDropdown(this);
    }
  });
});

// Function to toggle the dropdown
function toggleDropdown(element) {
  const selectItems = element.nextElementSibling;
  const isExpanded = element.getAttribute('aria-expanded') === 'true';

  // Toggle the dropdown visibility and the aria-expanded attribute
  element.setAttribute('aria-expanded', !isExpanded);
  selectItems.classList.toggle('select-hide');
  element.classList.toggle('active');
}

// Capture click, arrow keys, and Enter/Space to navigate through options and select
document.querySelectorAll('.select-items div').forEach(function(option) {
  // Handle option selection via click
  option.addEventListener('click', function() {
    selectOption(this);
  });

  // Handle option selection via keyboard
  option.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      selectOption(this);
    } else if (key === 'ArrowDown') {
      event.preventDefault();
      const next = this.nextElementSibling;
      if (next) next.focus(); // Move to next option
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      const prev = this.previousElementSibling;
      if (prev) prev.focus(); // Move to previous option
    }
  });
});

// Function to select an option and close the dropdown
function selectOption(option) {
  const selectedValue = option.getAttribute('data-value');
  const selectBox = option.closest('.custom-select').querySelector('.select-selected p');
  const hiddenInput = option.closest('.custom-select').nextElementSibling;

  // Update the selected text and the hidden input value
  selectBox.textContent = selectedValue;
  hiddenInput.value = selectedValue;

  // Close the dropdown
  const selectItems = option.parentElement;
  selectItems.classList.add('select-hide');
  const selectSelected = option.closest('.custom-select').querySelector('.select-selected');
  selectSelected.classList.remove('active');
  selectSelected.setAttribute('aria-expanded', 'false');
}

// Handle form submission
document.getElementById('signUpForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent actual form submission for demo purposes

  // Gather all form input values
  const studentName = document.getElementById('student-name').value;
  const email = document.getElementById('email').value;
  const institution = document.getElementById('Institution').value;
  const gender = document.getElementById('gender').value;
  const password = document.getElementById('password').value;

  // Display or send form values
  console.log('Student Name:', studentName);
  console.log('Email:', email);
  console.log('Institution:', institution);
  console.log('Gender:', gender);
  console.log('Password:', password);

  // Here you can send the data to your server or API
});
