fetch("components/nav.html")
.then(response => {
    if (response.ok) {
        throw new Error('HTTP error! status: $(response.status}');
    }
    return response.text();
})
.then(data => {
    document.getElementById("nav-component").innerHTML = data;

    const hamburger = document.getElementById("hamburger");
    const navlist = document.getElementById("nav-list");

    if (hamburger && navList) {
        hamburger.addEventListener("click", () => {
            navlist.classList.toggle("active");
        });
    } else { 
        console.error("Hamburger button or nav list element not found.");
    }