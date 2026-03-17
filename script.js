const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 100) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

function highlightApp(button) {
    const allButtons = document.querySelectorAll(".app-buttons button");
    allButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
}

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("h1");
    if (header) {
        header.classList.add("fade-in");
    }
});
