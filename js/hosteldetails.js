document.addEventListener('DOMContentLoaded', function() {
    const descriptions = document.querySelectorAll('.description-box');

    descriptions.forEach(function(description) {
        const toggleLink = description.querySelector('.toggle-link');
        const shortDesc = description.querySelector('.short-description');
        const fullDesc = description.querySelector('.full-description');

      
        toggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            const isExpanded = toggleLink.getAttribute('aria-expanded') === 'true';

            if (!isExpanded) {
                fullDesc.classList.add('expanded');
                toggleLink.setAttribute('aria-expanded', 'true');
                toggleLink.textContent = 'Read Less';

              
                fullDesc.appendChild(toggleLink);
            } else {
                fullDesc.classList.remove('expanded');
                toggleLink.setAttribute('aria-expanded', 'false');
                toggleLink.textContent = 'Read More...';

              
                shortDesc.appendChild(toggleLink);
            }
        });
    });
});

const caretUp = document.getElementById("caret-up");
const caretDown= document.getElementById("caret-down");
const dropdownContent = document.getElementById("other-content");
caretUp.addEventListener("click", function(){
    // e.preventDefault();
    caretUp.classList.add("not-expanded");       // Hide caretUp
    caretDown.classList.remove("not-expanded");  // Show caretDown
    dropdownContent.style.height = '0';
    dropdownContent.style.opacity = '0';

})
caretDown.addEventListener("click", function(){
    // e.preventDefault();
    e.target.classList.toggle("not-expanded");
    caretUp.classList.toggle("not-expanded");
    dropdownContent.style.height = dropdownContent.scrollHeight + 'px';
    dropdownContent.style.opacity = '1';

})