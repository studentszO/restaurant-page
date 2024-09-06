import homeImage from "./imgs/homeimg.jpeg";

export const homepage = (() => {
    const contentContainer = document.querySelector("#content");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const paraOne = document.createElement("p");
    const paraTwo = document.createElement("p");

    contentContainer.append(h2, img, paraOne, paraTwo);
    
    paraOne.style.marginBottom = "10px";
    paraOne.style.width = "fit-content";
    paraOne.style.fontSize = "1.2rem";
    paraOne.style.fontWeight = "900";
    paraOne.style.color = "var(--main-clr)"
    paraOne.style.textAlign = "left";
    paraOne.style.marginLeft = "10px";
    paraTwo.style.textAlign = "left";
    paraTwo.style.marginLeft = "40px";
    paraTwo.style.marginBottom = "10px";

    h2.textContent = "Zireael's Tavern";
    img.src = homeImage;
    paraOne.textContent = "We welcome YOU to our humble establishment webpage!";
    paraTwo.textContent = `This is the best place for fondue's adorer! Come disgust our fondue and 
    other things for the best price in the continent. You will NOT be deceived.
    The best fondue's place is Zireael's tavern!`;
});