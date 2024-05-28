import { fishList } from './fishList.js'
// import { tipList } from './tipList.js'
// import { locationList } from './locationList.js'


// Generate the fish list
const fishHTML = fishList()

// // Generate the care tips
// const tipHTML = tipList()

// // Generate the location list
// const locationHTML = locationList()

// Render each HTML string to the correct DOM element
export const renderFishToDOM = (fishHTML) => {
    const fishListElement = document.getElementById('fishList');
    if (fishListElement) {
        fishListElement.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "fishList"');
    }
}

renderFishToDOM(fishHTML)
