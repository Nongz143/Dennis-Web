// Back to Top button logic
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", function () {
    backToTopBtn.style.display =
        document.documentElement.scrollTop > 100 || document.body.scrollTop > 100
            ? "block"
            : "none";
});

window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
});