const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const root = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function applyTheme(theme) {
    if (theme === 'light') {
        root.classList.remove('theme-dark');
        root.classList.add('theme-light');
        themeIcon.textContent = '☀️';
    } else {
        root.classList.remove('theme-light');
        root.classList.add('theme-dark');
        themeIcon.textContent = '🌙';
    }
}

const storedTheme = localStorage.getItem('theme');
applyTheme(storedTheme || 'dark');

toggleBtn.addEventListener('click', () => {
    const next = root.classList.contains('theme-light') ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('theme', next);
});

const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('is-active');
    }
});

const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('visible');
});

document.querySelectorAll('a[href]').forEach(link => {
    if (link.target === "_blank") return;

    link.addEventListener('click', (e) => {
        const url = link.getAttribute('href');
        if (!url || url.startsWith('#')) return;

        e.preventDefault();
        document.body.classList.remove('visible');
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    });
});