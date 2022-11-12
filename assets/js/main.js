// Menu Bar
const toggle = document.querySelector(".toggle")
const menu = document.querySelector(".nav-menu")

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active")

    // add menu icon
    toggle.innerHTML = `<i class="fas fa-bars">`
  }
  else {
    menu.classList.add("active")

    // add x (close menu) icon
    toggle.innerHTML = `<i class="fas fa-times"></i>`
  }
}

toggle.addEventListener("click", toggleMenu, false)

// Typing Animation using Typed JS
var typed = new Typed(".type", {
  strings: ["Backend Engineer", "Data Scientist"],
  smartBackspace: true,
  startDelay: 1000,
  typeSpeed: 130,
  backDelay: 1000,
  backSpeed: 60,
  loop: true,
})
