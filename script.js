fetch("components/nav.html")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("nav-component").innerHTML = data;

        // After nav is loaded, enable hamburger toggle
        const hamburger = document.querySelector(".hamburger");
        const navList = document.getElementById("nav-list");

        if (hamburger && navList) {
            hamburger.addEventListener("click", () => {
                navList.classList.toggle("show");
            });
        } else {
            console.error("Hamburger button or nav list element not found.");
        }
    })
    .catch(error => {
        console.error("Failed to load nav.html:", error);
    });
    
    document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("changeHeaderBtn");
  button.addEventListener("click", function () {
    const header = document.querySelector("h1");
    if (header) {
      header.textContent = "Welcome to Dennis-Web!";
      header.classList.add("fade-in");
      header.style.color = "#0077cc"; // Change header text color
      alert("Header updated successfully!");
    }
    document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("h1");
  const button = document.createElement("button");
  button.textContent = "Launch Header!";
  button.style.marginTop = "10px";

  button.addEventListener("click", function () {
    header.innerHTML = '<i class="fas fa-rocket"></i> Mission Launched!';
    header.style.color = "#0077cc";
  });

  document.body.insertBefore(button, document.body.firstChild);
});
  });
});
