
const caretUp = document.querySelector('#caret-up');
const caretdown = document.querySelector('#caret-down');

function toggleDropdown(element) {
    const selectItems = element.nextElementSibling;
    const isExpanded = element.getAttribute('aria-expanded') === 'true';
  
    element.setAttribute('aria-expanded', !isExpanded);
    selectItems.classList.toggle('select-hide');
    element.classList.toggle('active');
    if(isExpanded){
        caretUp.classList.toggle('not-expanded');
        caretdown.classList.add('not-expanded');
    }else{
        caretUp.classList.add('not-expanded');
        caretdown.classList.remove('not-expanded');
    }
}

// Handle custom dropdowns for Institution 
const dropdownContent = document.querySelector('.select-selected');

dropdownContent.addEventListener("click", function () {
    toggleDropdown(this);
   
});

//for more accessibillity
dropdownContent.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleDropdown(this);
    }
});

//to Capture the selected value from the custom dropdown and update hidden input
document.querySelectorAll('.select-items div').forEach(function(option) {
    option.addEventListener('click', function() {
      selectOption(this);
    });
  
    option.addEventListener('keydown', function(event) {
      const key = event.key;
  
      if (key === 'Enter' || key === ' ') {
        event.preventDefault();
        selectOption(this);
      }
    });
});
  
  
function selectOption(option) {
    const selectedValue = option.getAttribute('data-value');
    const selectBox = option.closest('.custom-select').querySelector('.select-selected p');
    const hiddenInput = option.closest('.custom-select').nextElementSibling;
  
   
    selectBox.textContent = selectedValue;
    hiddenInput.value = selectedValue;
  
  
    const customSelect = option.closest('.custom-select').querySelector('.select-selected');
    // if (selectedValue) {
    //   customSelect.classList.add("select-has-value");
    // }
  
    
    const selectItems = option.parentElement;
    selectItems.classList.add('select-hide');
    const selectSelected = option.closest('.custom-select').querySelector('.select-selected');
    selectSelected.classList.remove('active');
    selectSelected.setAttribute('aria-expanded', 'false');
}
  
//image upload logic
const fileInput = document.getElementById('file-upload');
const profileImage = document.getElementById('profile-img');

fileInput.addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file); 
    }
};


