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