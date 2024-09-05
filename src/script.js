import "./style.css";
import { homepage } from "./homepage.js";
import { ourStory } from "./ourstory.js";

const buttons = document.querySelectorAll("button")
homepage();

let setPageId = 0;
const contentContainer = document.querySelector("#content");

buttons.forEach((e) => e.addEventListener("click", () => {
    const id = Array.from(e.parentNode.children).indexOf(e);
    contentContainer.textContent = "";
    console.log(setPageId )

    if (id === 1) {
        ourStory();
        setPageId = 1
    }
    else if (id === 0 && setPageId !== 0) {
        homepage();
        setPageId = 0;
    }
    // else if (id === 2) {
    //     setPageId = 2;
    // }
    // else if (id === 3) {
    //     setPageId = 3;
    // }
    // else if (id === 4) {
    //     setPageId = 4;
    // }
}));