let backdrop = document.querySelector(".backdrop");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

toggleButton.addEventListener("click", function () {
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});
backdrop.addEventListener("click", function () {
  backdrop.classList.remove("open");
  mobileNav.classList.remove("open");
});