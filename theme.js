const body = document.body;
const toggle = document.getElementById("theme-toggle");

// cargar preferencia guardada
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
}

// toggle
toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});