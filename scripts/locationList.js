import { database } from "./aquariumData.js";


export const locationList = () => {
    let locationListHTML = `<article class="locations">
    <h1><strong>Locations:</strong></h1>`;
    for (const location of database.locations) {
        locationListHTML += `
            <section class="location">
                <h2>${location.name}</h2>
                <p><strong>Location:</strong> ${location.country}</p>
                <p><strong>Description:</strong> ${location.description}</p>
            </section>`;
    }
    locationListHTML += `</article>`;
    return locationListHTML;
};


export const renderLocationToDOM = (locationHTML) => {
    const locationElement = document.getElementById("locationList");
    if (locationElement) {
        locationElement.innerHTML = locationHTML;
    } else {
        console.error('Could not find element with id "locationList"');
    }
};




