import "./style.css";
import homeImage from "./imgs/homeimg.jpeg";

const homepage = (() => {
    const contentContainer = document.querySelector("#content");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const paraOne = document.createElement("p");
    const paraTwo = document.createElement("p");

    contentContainer.append(h2, img, paraOne, paraTwo);
    
    h2.textContent = "Zireael's Tavern";
    img.src = homeImage;
    paraOne.textContent = "We welcome YOU to our humble establishment webpage!";
    paraTwo.textContent = `This is the best place for fondue's adorer! Come disgust our fondue and 
    other things for the best price in the continent. You will NOT be deceived.
    The best fondue's place is Zireael's tavern!`;

})();