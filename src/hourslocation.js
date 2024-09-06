import map from "./imgs/map.png"

export const hoursAndLocation = (() => {
    const contentContainer = document.querySelector("#content");
    const divHours = document.createElement("div");
    const divLocation = document.createElement("div");
    const h2Hours = document.createElement("h2");
    const h2Location = document.createElement("h2");
    const img = document.createElement("img");
    const paraOne = document.createElement("p");
    const paraTwo = document.createElement("p");

    const weekdays = document.createElement("div");
    const saturday = document.createElement("div");
    const sunday = document.createElement("div");

    contentContainer.append(divLocation, divHours);
    divLocation.append(h2Location, img, paraOne);
    divHours.append(h2Hours, paraTwo);
    paraTwo.append(weekdays, document.createElement("hr"), saturday, document.createElement("hr"),  sunday);

    paraOne.style.marginBottom = "10px";
    paraOne.style.fontSize = "1.2rem";
    paraOne.style.width = "fit-content";
    paraOne.style.fontWeight = "900";
    paraOne.style.color = "var(--main-clr)"
    paraOne.style.textAlign = "left";
    paraOne.style.marginLeft = "10px";
    paraTwo.style.textAlign = "left";
    paraTwo.style.width = "fit-content"
    paraTwo.style.margin= "35px auto";
    paraTwo.style.justifySelf = "center"
    
    h2Location.textContent = "Where are we?";
    h2Hours.textContent = "Opening hours";
    img.src = map;
    paraOne.textContent = "The tavern is located on the frontier of the forest of Erlenwald (x), just to the north of Nazair";
    weekdays.textContent = "ON WEEK DAYS: FROM 11AM TO 10PM";
    saturday.textContent = "ON SATURDAY: FROM 9AM TO 12PM";
    sunday.textContent = "ON SUNDAY: FROM 11AM TO 3PM";
});