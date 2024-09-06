import ourStoryImage from "./imgs/ourstoryimg.jpeg"

export const ourStory = (() => {
    const contentContainer = document.querySelector("#content");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const paraOne = document.createElement("p");
    const paraTwo = document.createElement("p");
    const paraThree = document.createElement("p");

    contentContainer.append(h2, img, paraOne, paraTwo, paraThree);
    
    h2.textContent = "Our Story";
    img.src = ourStoryImage;

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

    paraOne.textContent = "This tavern was created around 1392.";
    paraTwo.textContent = `The name Zireael comes from the one of the many aliases that 
    Cirilla Fiona Elen Riannon got to this age. It's an elven word for "Swallow".
    This elven word was so beautiful that we decided to use it for our wonderful tavern in the woods of Erlenwald.`;
    paraThree.textContent = "Everyone is welcome here, whatever race you comes from!";
});