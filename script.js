const openBtn = document.getElementById('openSnapshotModal');
const modal = document.getElementById('snapshotModal');

if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    });

    modal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && modal && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
});

const toggle = document.getElementById('darkModeToggle');

if (toggle) {
    toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });
}

const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("nav-active");
    }
});

const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
    });
}

const toggle = document.getElementById('darkModeToggle');
const icon = document.getElementById('themeIcon');

if (toggle) {
    toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun', 'text-yellow-300');
        } else {
            icon.classList.remove('fa-sun', 'text-yellow-300');
            icon.classList.add('fa-moon');
        }
    });
}

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        header.classList.add("shadow-lg", "bg-white/90", "dark:bg-gray