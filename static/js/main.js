const $hamburger = document.getElementById("hamburger");
const $dropdown = document.getElementById("dropdown");
const $button = document.getElementById("dropdown-button");
const $main = document.getElementById("main");
const $filler = document.getElementById("filler");

function toggleDropdown(state) {
  $dropdown.classList.toggle("toggle", state);
  $filler.classList.toggle("filler--toggle", state);
}

$hamburger.addEventListener("click", () => toggleDropdown());
$button.addEventListener("click", () => toggleDropdown(false));
$main.addEventListener("click", (event) => {
  if (event.target !== $dropdown) toggleDropdown(false);
});

const sidenavLinks = document.querySelectorAll(".sidenav-link a");

sidenavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#ontstaan") {
      return;
    }

    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    const offsetPosition =
      targetElement.getBoundingClientRect().top +
      window.scrollY -
      document.querySelector(".sidenav").offsetHeight -
      5 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});