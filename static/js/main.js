const $hamburger = document.getElementById("hamburger");
const $hidden = document.getElementById("hidden");
const $button = document.getElementById("hidden-button");
const $main = document.getElementById("main");
const $filter = document.getElementById("filter");

function toggleHidden(state) {
  $hidden.classList.toggle("toggle", state);
  $filter.classList.toggle("filter-toggle", state);
}

$hamburger.addEventListener("click", () => toggleHidden());
$button.addEventListener("click", () => toggleHidden(false));
$main.addEventListener("click", (event) => {
  if (event.target !== $hidden) toggleHidden(false);
});

const sidemenuLinks = document.querySelectorAll(".sidemenu-link a");

sidemenuLinks.forEach((link) => {
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
      document.querySelector(".sidemenu").offsetHeight -
      5 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});