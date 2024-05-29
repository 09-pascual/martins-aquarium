import { database } from './aquariumData.js';

// Render each tip as an <li class="tip">
// element INSIDE a <ul class="tips"> element.

export const tipList = () => {

    let tipListHTML = `<ul class= "tips">
    <h1>Fish Care Tips</h1>`
    for (const tip of database.tips) {
        tipListHTML += `
            <li class="tip"> 
                <strong>${tip.topic}:</strong> ${tip.text}
            </li>`
    }
    tipListHTML += `</ul>`
    return tipListHTML
}

export const renderFishTipsToDOM = (tipListHTML) => {
    const fishTipElement = document.getElementById(`tipList`)
    if (fishTipElement) {
        fishTipElement.innerHTML = tipListHTML
    } else {
        console.error(`Could not find element with id "tipList"`)
    }
}