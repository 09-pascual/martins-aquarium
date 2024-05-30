import { fishList, renderFishToDOM  } from './fishList.js'
import { tipList, renderFishTipsToDOM } from './tipList.js'
import { locationList, renderLocationToDOM } from './locationList.js'
import { MostHolyFish, renderHolyFishToDOM, 
    SoldierFish, renderSoldiersToDOM,
    RegularFish, renderRegularFishToDOM } from './filteringFish.js'
import { database } from './aquariumData.js'


// Generate the fish list
const fishHTML = fishList()

//  Generate the care tips
const tipHTML = tipList()

// Generate the location list
 const locationHTML = locationList()

//generate the holy fish list
const holyFishHTML = MostHolyFish() 
//generate the soldier fish list
const soldierFishHTML = SoldierFish()
//generate the regular fish list
const regularFishHTML = RegularFish()
// Render each HTML string to the correct DOM element
renderFishTipsToDOM(tipHTML)
renderLocationToDOM(locationHTML)
renderFishToDOM(fishHTML)

renderHolyFishToDOM(holyFishHTML)
renderSoldiersToDOM(soldierFishHTML)
renderRegularFishToDOM(regularFishHTML)

// domReference.innerHTML = `${holyFishHTML}${soldierFishHTML}${regularFishHTML}`