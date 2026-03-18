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

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    });
}

const darkToggle = document.getElementById('darkModeToggle');
const themeIcon = document.getElementById('themeIcon');

if (darkToggle && themeIcon) {
    darkToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun', 'text-yellow-300');
        } else {
            themeIcon.classList.remove('fa-sun', 'text-yellow-300');
            themeIcon.classList.add('fa-moon');
        }
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

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
    });
}

const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            header.classList.add("shadow-lg", "bg-white/90", "dark:bg-gray-900");
        } else {
            header.classList.remove("shadow-lg", "bg-white/90", "dark:bg-gray-900");
        }
    });
}