import menuImg from "./imgs/menu.jpeg"

export const theMenu = (() => {
    const contentContainer = document.querySelector("#content");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const paraOne = document.createElement("p");
    const paraTwo = document.createElement("p");
    const paraThree = document.createElement("p");

    contentContainer.append(h2, img, paraOne, paraTwo, paraThree);
    
    h2.textContent = "The Menu";
    img.src = menuImg;
    img.id = "menu-img";

    paraOne.style.marginBottom = "10px";
    paraOne.style.fontSize = "1.2rem";
    paraOne.style.fontWeight = "900";
    paraOne.style.color = "var(--main-clr)"
    paraOne.style.textAlign = "left";
    paraOne.style.marginLeft = "10px";
    paraThree.style.textAlign = "left";
    paraTwo.style.textAlign = "left";
    paraTwo.style.marginLeft = "40px";
    paraThree.style.marginLeft = "40px";
    paraTwo.style.marginBottom = "10px";

    paraOne.textContent = "We serve only our special menu here.";
    paraTwo.textContent = `And you know what it is! Yes, the famous elven fondue from Erlenwald. One of the wonders of the Continent!`;
    paraThree.textContent = "For a small sum of 4 florens, you can taste this amazing fondue!";
});