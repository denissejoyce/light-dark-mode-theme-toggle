const toggler = document.getElementById("toggle-bar");

document
  .querySelector(".toggle-bar-wrapper")
  .addEventListener("click", () => toggler.classList.remove("day"));
