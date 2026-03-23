// ── Burger menu ──
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");

burger?.addEventListener("click", () => {
  burger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

// Fermer en cliquant un lien ou en dehors
mobileMenu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    burger.classList.remove("open");
    mobileMenu.classList.remove("open");
  });
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
    burger?.classList.remove("open");
    mobileMenu?.classList.remove("open");
  }
});

const nav = document.querySelector("nav");

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

// Fermer en cliquant l'overlay
document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
});

// Fermer avec Echap
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.open").forEach((o) => {
      o.classList.remove("open");
      document.body.style.overflow = "";
    });
  }
});

// Rideau
const curtainLeft = document.getElementById("curtainLeft");
const curtainRight = document.getElementById("curtainRight");
setTimeout(function () {
  curtainLeft.classList.add("open");
  curtainRight.classList.add("open");
}, 300);


