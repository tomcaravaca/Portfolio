// ── Burger menu ──
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");
const menuOverlay = document.getElementById("menu-overlay");
const nav = document.querySelector("nav");

function openMenu() {
  burger.classList.add("open");
  mobileMenu.classList.add("open");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  burger.classList.remove("open");
  mobileMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
}

burger?.addEventListener("click", () => {
  mobileMenu.classList.contains("open") ? closeMenu() : openMenu();
});

// Fermer en cliquant un lien
mobileMenu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});

// Fermer en cliquant l'overlay flouté
menuOverlay?.addEventListener("click", closeMenu);

// Fermer en cliquant en dehors
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMenu();
  }
});

// ── Fade-up ──
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.08 },
);
document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));

// ── Modal ──
function openModal(id) {
  const overlay = document.getElementById("modal-" + id);
  if (!overlay) return;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  const overlay = document.getElementById("modal-" + id);
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.open").forEach((o) => {
      o.classList.remove("open");
      document.body.style.overflow = "";
    });
    closeMenu();
  }
});

// ── Rideau ──
const curtainLeft = document.getElementById("curtainLeft");
const curtainRight = document.getElementById("curtainRight");
if (curtainLeft && curtainRight) {
  setTimeout(() => {
    curtainLeft.classList.add("open");
    curtainRight.classList.add("open");
  }, 300);
}
