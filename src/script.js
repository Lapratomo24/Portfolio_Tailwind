// toggler
const toggler = document.querySelector("#toggler");
const menu = document.querySelector("#menu");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("toggler-active");
  menu.classList.toggle("hidden");
})

// fixed navbar when scrolling
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if(window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
}
