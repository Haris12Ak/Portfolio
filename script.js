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

document.querySelector('.responsive-nav > div')
    .addEventListener('click', () => {
        const responsoveNav = document.querySelector('.responsive-nav');
        responsoveNav.classList.toggle('active');
    });