// fonctionnement de la navbar
function initNavbar() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const menuBackdrop = document.querySelector(".menu-backdrop");

  if (!hamburger || !navLinks || !menuBackdrop) return;

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
}
