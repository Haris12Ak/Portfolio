document.querySelectorAll('.show-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const text = btn.previousElementSibling;
        text.classList.toggle('expanded');
        btn.textContent = text.classList.contains('expanded') ? 'Show less' : 'Show more';
    });
});

function openLink(event) {
    const url = event.currentTarget.getAttribute('data-url');
    if (url) {
        window.open(url, '_blank');
    } else {
        console.error("URL not found.");
    }
}

function toggleResponsiveMenu() {
    const responsiveNav = document.querySelector('.responsive-nav');
    const menuIcon = document.querySelector('.menu-icon');

    responsiveNav.classList.toggle('active');

    if (responsiveNav.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
}

document.querySelector('.responsive-nav > div')
    .addEventListener('click', toggleResponsiveMenu);