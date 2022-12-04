// WELCOME-SECTION
let menu = document.querySelector(".menu");
let menuBtn = document.querySelector('.menu-btn');
let options = document.querySelector('.options');
/* show/hide menu options when clicking on the menu button */
menuBtn.addEventListener("click", () => {
    options.classList.toggle("show-options");
    menu.classList.toggle("menu-background");
});
// show the menu background color when scrolling
window.addEventListener("scroll", () => {
    if (window.pageYOffset > menu.offsetHeight) {
        menu.classList.add("menuScrolled");
    }
    else {
        menu.classList.remove("menuScrolled");
    }
});