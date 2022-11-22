import header from "./modules/header";
import home from "./modules/home";
import menu from "./modules/menu";
import contact from "./modules/contact";

defaultPage();

function eventHandler(){
    const homeBtn = document.querySelector(".home");
    homeBtn.addEventListener("click", home);

    const menuBtn = document.querySelector(".menu");
    menuBtn.addEventListener("click", menu);

    const contactBtn = document.querySelector(".contact");
    contactBtn.addEventListener("click", contact);
}

function defaultPage(){
    header();
    home();
    eventHandler();
}
