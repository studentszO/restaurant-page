import "./style.css";
import { homepage } from "./homepage.js";
import { ourStory } from "./ourstory.js";
import { hoursAndLocation } from "./hourslocation.js";
import { theMenu } from "./menu.js";

const buttons = document.querySelectorAll("button")
homepage();

let setPageId = 0;
const contentContainer = document.querySelector("#content");

function changeButtonColor() {
    buttons.forEach((e) => e.style.backgroundColor = "");
    buttons[setPageId].style.backgroundColor = "var(--main-clr)";
};
changeButtonColor(); 

buttons.forEach((e) => e.addEventListener("click", () => {
    const id = Array.from(e.parentNode.children).indexOf(e);

    if (id === 0 && setPageId !== 0) {
        contentContainer.textContent = "";
        homepage();
        setPageId = 0;
    }
    if (id === 1) {
        contentContainer.textContent = "";
        ourStory();
        setPageId = 1
    }
    else if (id === 2) {
        contentContainer.textContent = "";
        setPageId = 2;
        theMenu();
    }
    else if (id === 3) {
        contentContainer.textContent = "";
        hoursAndLocation();
        setPageId = 3;
    }

    changeButtonColor();

}));