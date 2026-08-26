// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const nav = document.querySelector('.header nav');
const header = document.querySelector('.header');

header.addEventListener('click', function(e) {
    if (window.innerWidth < 900) {
        // Toggle navigation visibility on mobile
        const links = nav.querySelectorAll('a');
        links.forEach(link => {
            if (!link.classList.contains('cart-link')) {
                link.style.display = link.style.display === 'none' ? 'inline' : 'none';
            }
        });
    }
});
