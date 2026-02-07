const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const menuBackdrop = document.querySelector(".menu-backdrop");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  menuBackdrop.classList.toggle("active");
});

//fermer le menu
menuBackdrop.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
  menuBackdrop.classList.remove("active");
});

//fermer le menu en cliquant sur un lien
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    menuBackdrop.classList.remove("active");
  });
});
