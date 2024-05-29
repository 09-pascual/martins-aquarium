import { fishList, renderFishToDOM  } from './fishList.js'
import { tipList, renderFishTipsToDOM } from './tipList.js'
import { locationList, renderLocationToDOM } from './locationList.js'


// Generate the fish list
const fishHTML = fishList()

//  Generate the care tips
const tipHTML = tipList()

// Generate the location list
 const locationHTML = locationList()

// Render each HTML string to the correct DOM element


renderFishTipsToDOM(tipHTML)
renderLocationToDOM(locationHTML)
renderFishToDOM(fishHTML)

