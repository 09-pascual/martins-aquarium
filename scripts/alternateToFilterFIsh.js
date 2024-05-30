import { database } from "./aquariumData.js";

export const generateFishHTML = (fishType, fishLengthCondition) => {
    let fishHTML = `<ul class="${fishType}Fish">
    <h1><Strong>${fishType} Fish</Strong></h1>`;

    for (let fish of database.fish) {
        if(fishLengthCondition(fish.length)) {
            fishHTML += `
            <li class="${fishType}">
             ${fish.species}
            </li>`;
        } 
    }
    fishHTML += `</ul>`;
    return fishHTML;
}

export const renderFishToDOM = (fishHTML, fishType) => {
    const fishElement = document.getElementById(fishType);
    if(fishElement) {
        fishElement.innerHTML = fishHTML;
    } else {
        console.error(`Cannot find element with id "${fishType}"`);
    }
}





const holyFishHTML = generateFishHTML("Holy", length => length % 3 === 0);
renderFishToDOM(holyFishHTML, "holyFish");

const soldierFishHTML = generateFishHTML("Soldier", length => length % 5 === 0);
renderFishToDOM(soldierFishHTML, "soldierFish");

const regularFishHTML = generateFishHTML("Regular", length => length % 5 !== 0 && length % 3 !== 0);
renderFishToDOM(regularFishHTML, "regularFish");



