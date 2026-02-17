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
  btn.textContent = "Envoi en cours ";
  setTimeout(() => {
    btn.textContent = "Envoi en cours .";
  }, 300);
  setTimeout(() => {
    btn.textContent = "Envoi en cours ..";
  }, 600);
  setTimeout(() => {
    btn.textContent = "Envoi en cours ...";
  }, 900);
  setTimeout(() => {
    btn.textContent = "Envoi en cours ";
  }, 1200);
  setTimeout(() => {
    btn.textContent = "Envoi en cours .";
  }, 1500);
  setTimeout(() => {
    btn.textContent = "Envoi en cours ..";
  }, 1800);
  setTimeout(() => {
    btn.textContent = "Envoi en cours ...";
  }, 2100);
  event.preventDefault();

  emailjs.sendForm("service_c6u16xf", "template_c7yqxv4", this).then(() => {});

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 2500);
});
