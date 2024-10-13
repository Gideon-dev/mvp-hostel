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
