// charger la navbar
fetch("../navbar/navbar.html")
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

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_c6u16xf", "template_c7yqxv4", this);
});
