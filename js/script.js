/* 

NAV HAMBURGER 


*/
const menu = document.querySelectorAll(".navbar__list")
const line1 = document.querySelector(".hamburger__line1")
const line2 = document.querySelector(".hamburger__line2")
const line3 = document.querySelector(".hamburger__line3")
const heading = document.querySelector(".box__title")

const hamburgerMenu = document.querySelector(".hamburger")

hamburgerMenu.addEventListener("click", () => {

    for(let i = 0; i < menu.length; i ++){
        menu[i].classList.toggle("change");
    }
    heading.classList.toggle("hide");


})