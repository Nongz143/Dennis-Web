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