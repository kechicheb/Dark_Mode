let toggle = document.querySelector(".toggle");
let span = document.querySelector(".toggle > span");

window.onload = function () {
  darkMode(localStorage.getItem("active"));
};
toggle.addEventListener("click", () => {
  span.classList.toggle("active");
  if (span.classList.contains("active")) {
    localStorage.setItem("active", "dark");
    darkMode(localStorage.getItem("active"));
  } else {
    localStorage["active"] = "white";
    darkMode(localStorage.getItem("active"));
  }
});

function darkMode(value) {
  if (value == "dark") {
    span.classList.add("active");
    document.documentElement.style.setProperty("--white-color", "#000");
    document.documentElement.style.setProperty("--dark-color", "#fff");
  } else {
    document.documentElement.style.setProperty("--white-color", "#fff");
    document.documentElement.style.setProperty("--dark-color", "#000");
  }
}
// console.log(document.querySelector(':root') === document.documentElement);
// return true
