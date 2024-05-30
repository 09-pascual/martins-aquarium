import { database } from "./aquariumData.js";


//Functions that return an HTML string will have a capital first letter from now on

export const MostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish

    let holyFishHtml = `<ul class="holyFish">
    <h1><Strong>Holy Fish</Strong></h1>`

    for (let holyFish of database.fish) {
        if(holyFish.length % 3 === 0 ) {
            holyFishHtml += `
            <li class="holy">
                 ${holyFish.species}
            </li>`
        } 
        holyFishHtml += `</ul>`
    } return holyFishHtml
}

export const renderHolyFishToDOM = (holyFishHTML) => {
    const holyFishElement = document.getElementById("holyFish")
    if(holyFishElement) {
        holyFishElement.innerHTML = holyFishHTML
    } else {
        console.error(`cannot find element with id "holyFish"`)
    }
}

export const SoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFishHTML = `<ul class="soldierFish">
    <h1><Strong>Soldier Fish</Strong></h1>`
    for (const soldier of database.fish) {
        if(soldier.length % 5 === 0) {
            soldierFishHTML +=`
            <li class = "soldier">
                ${soldier.species} 
            </li>`
        } 
        soldierFishHTML += `</ul>`
    }  return soldierFishHTML
}

export const renderSoldiersToDOM = (soldierFishHTML) => {
    const soldierFishElement = document.getElementById("soldierFish")
    if(soldierFishElement) {
        soldierFishElement.innerHTML = soldierFishHTML
    } else {
        console.error(`no element with id "soldierFIsh" exists`)
    }
}

export const RegularFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFishHTML = `<ul class="regularFish">
    <h1><Strong>regular Fish</Strong></h1>`
    for (const regularFish of database.fish) {
        if(regularFish.length % 5 !== 0 && regularFish.length % 3 !== 0 ) {
            regularFishHTML +=`
            <li class = "normalFish">
                ${regularFish.species} 
            </li>`
        } 
        regularFishHTML += `</ul>`
    }  return regularFishHTML
}

export const renderRegularFishToDOM = (regularFishHTML) => {
    const regularFishElement = document.getElementById("regularFish")
    if(regularFishElement) {
        regularFishElement.innerHTML = regularFishHTML
    } else {
        console.error( `no element with that id exists`)
    }
}