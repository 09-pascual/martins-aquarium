import { database } from './aquariumData.js';

export const fishList = () => {
    let fishHTML = '';
    for (const fish of database.fish) {
        fishHTML += `
        <article class="fish">
            <img src="${fish.image}" alt="${fish.name}" class="fish__image">
            <div class="fish__details">
                <h2 class="fish__name">${fish.name}</h2>
                <p class="fish__species"><strong>Species:</strong> ${fish.species}</p>
                <p class="fish__length"><strong>Length:</strong> ${fish.length} inches</p>
                <p class="fish__location"><strong>Location:</strong> ${fish.location}</p>
                <p class="fish__diet"><strong>Diet:</strong> ${fish.diet}</p>
            </div>
        </article>
        `;
    }
    return fishHTML;
};
