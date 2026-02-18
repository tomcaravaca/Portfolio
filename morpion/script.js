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

let joueurActuel = "X";
let grille = ["", "", "", "", "", "", "", "", ""];
let jeuActif = true;

const combinaisonsGagnantes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cases = document.querySelectorAll(".case");
const message = document.getElementById("message");
const btnReset = document.getElementById("reset");

function jouerCoup(e) {
  const index = e.target.dataset.index;

  if (grille[index] !== "" || !jeuActif) {
    return;
  }

  grille[index] = joueurActuel;
  e.target.textContent = joueurActuel;
  e.target.classList.add(joueurActuel);
  e.target.disabled = true;

  if (verifierVictoire()) {
    message.textContent = ` ${joueurActuel} a gagné !`;
    jeuActif = false;
    return;
  }

  if (!grille.includes("")) {
    message.textContent = "Match nul !";
    jeuActif = false;
    return;
  }

  joueurActuel = joueurActuel === "X" ? "O" : "X";
  message.textContent = `Au tour de ${joueurActuel}`;
}

function verifierVictoire() {
  for (let combinaison of combinaisonsGagnantes) {
    const [a, b, c] = combinaison;

    if (grille[a] && grille[a] === grille[b] && grille[a] === grille[c]) {
      cases[a].classList.add("gagnant");
      cases[b].classList.add("gagnant");
      cases[c].classList.add("gagnant");
      return true;
    }
  }
  return false;
}

function recommencer() {
  joueurActuel = "X";
  grille = ["", "", "", "", "", "", "", "", ""];
  jeuActif = true;
  message.textContent = "Au tour de X";

  cases.forEach((case_) => {
    case_.textContent = "";
    case_.disabled = false;
    case_.classList.remove("X", "O", "gagnant");
  });
}

cases.forEach((case_) => {
  case_.addEventListener("click", jouerCoup);
});

btnReset.addEventListener("click", recommencer);
