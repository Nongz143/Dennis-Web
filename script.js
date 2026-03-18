const snapshotOpenBtn = document.getElementById('openSnapshotModal');
const snapshotModal = document.getElementById('snapshotModal');

if (snapshotOpenBtn && snapshotModal) {
    snapshotOpenBtn.addEventListener('click', () => {
        snapshotModal.classList.remove('hidden');
        snapshotModal.classList.add('flex');
    });

    snapshotModal.addEventListener('click', () => {
        snapshotModal.classList.add('hidden');
        snapshotModal.classList.remove('flex');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !snapshotModal.classList.contains('hidden')) {
            snapshotModal.classList.add('hidden');
            snapshotModal.classList.remove('flex');
        }
    });
}

const darkModeToggle = document.getElementById('darkModeToggle');
const themeIcon = document.getElementById('themeIcon');

if (darkModeToggle && themeIcon) {
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');

        const isDark = document.documentElement.classList.contains('dark');

        if (isDark) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun', 'text-yellow-300');
        } else {
            themeIcon.classList.remove('fa-sun', 'text-yellow-300');
            themeIcon.classList.add('fa-moon');
        }
    });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('nav-active');
    }
});

const hamburgerBtn = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !navMenu.classList.contains('hidden')) {
            navMenu.classList.add('hidden');
        }
    });
}

const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-lg', 'bg-white/90', 'dark:bg-gray-900');
        } else {
            header.classList.remove('shadow-lg', 'bg-white/90', 'dark:bg-gray-900');
        }
    });
}

