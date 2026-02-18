// Écran de chargement
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");

    setTimeout(() => {
      loader.remove();
    }, 500);
  }, 1000);
});

// charger la navbar
fetch("navbar/navbar-root.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;

    // fonctionnement de la navbar
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const menuBackdrop = document.querySelector(".menu-backdrop");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
      menuBackdrop.classList.toggle("active");
    });

    menuBackdrop.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      menuBackdrop.classList.remove("active");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        menuBackdrop.classList.remove("active");
      });
    });
  });
// navbar fin

fetch('https://api.countapi.xyz/hit/tomcaravaca.github.io/visits')
  .then(res => res.json())
  .then(data => {
    document.getElementById('counter').textContent = data.value;
  });