const toggler = document.getElementById("toggle-bar");

document
  .querySelector(".toggle-bar-wrapper")
  .addEventListener("click", function () {
    toggler.classList.toggle("day");
    toggler.classList.toggle("night");
  });
