document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Check if the link is an internal anchor
            if (link.getAttribute('href').startsWith('#')) {
                event.preventDefault();

                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Scroll smoothly to the target element
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('.main-header').offsetHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});