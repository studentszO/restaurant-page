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
    paraOne.textContent = "This tavern was created around 1392.";
    paraTwo.textContent = `The name Zireael comes from the one of the many aliases that 
    Cirilla Fiona Elen Riannon got to this age. It's an elven word for "Swallow".
    This elven word was so beautiful that we decided to use it for our wonderful tavern in the woods of Erlenwald.`;
    paraThree.textContent = "Everyone is welcome here, whatever race you comes from!"
});