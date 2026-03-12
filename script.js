document.addEventListener("DOMContentLoaded", function () {
    // Header update button
    const header = document.querySelector("h1");
    const button = document.createElement("button");
    button.textContent = "Launch Header!";
    button.id = "changeHeaderBtn";
    button.style.marginTop = "10px";

    button.addEventListener("click", function () {
        if (header) {
            header.innerHTML = '<i class="fas fa-rocket"></i> Mission Launched!';
            header.classList.add("fade-in");
            header.style.color = "#0077cc";
            alert("Header updated successfully!");
        }
    });

    document.body.insertBefore(button, document.body.firstChild);

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