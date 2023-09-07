export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);

export function createCharacterCard(character) {
  // the main card container
  const cardCreator = document.createElement("div");
  cardCreator.classList.add("card");

  // the image container
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("card__image-container");

  //  the image element
  const image = document.createElement("img");
  image.classList.add("card__image");
  image.src = character.image;
  image.alt = character.name;

  //  the content container
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("card__content");

  //  the character's name
  const nameOfChar = document.createElement("h2");
  nameOfChar.classList.add("card__title");
  nameOfChar.textContent = character.name;

  //  the container for information
  const containerForInformation = document.createElement("div");

  // Create status
  const statusTitle = document.createElement("dt");
  statusTitle.classList.add("card__info-title");
  statusTitle.textContent = "Status";

  const statusDescription = document.createElement("dd");
  statusDescription.classList.add("card__info-description");
  statusDescription.textContent = character.status;

  // Create Type
  const typeTitle = document.createElement("dt");
  typeTitle.classList.add("card__info-title");
  typeTitle.textContent = "Type";

  const typeDescription = document.createElement("dd");
  typeDescription.classList.add("card__info-description");
  typeDescription.textContent = character.type;

  // Create Occurrences
  const occurrencesTitle = document.createElement("dt");
  occurrencesTitle.classList.add("card__info-title");
  occurrencesTitle.textContent = "Occurrences";

  const occurrencesDescription = document.createElement("dd");
  occurrencesDescription.classList.add("card__info-description");
  occurrencesDescription.textContent = character.episode.length;

  // Append elements to the appropriate containers
  containerForInformation.appendChild(statusTitle);
  containerForInformation.appendChild(statusDescription);
  containerForInformation.appendChild(typeTitle);
  containerForInformation.appendChild(typeDescription);
  containerForInformation.appendChild(occurrencesTitle);
  containerForInformation.appendChild(occurrencesDescription);

  contentContainer.appendChild(nameOfChar);
  contentContainer.appendChild(containerForInformation);

  imageContainer.appendChild(image);

  cardCreator.appendChild(imageContainer);
  cardCreator.appendChild(contentContainer);

  // Append the card to the cardContainer
  return cardCreator;
}

// const containerForInformation = document.createElement('dl')
// containerForInformation.innerHTML +=
// `<dt class="card__info-title">Status</dt>
// <dd class="card__info-description">${data.status}</dd>
// <dt class="card__info-title">Type</dt>
// <dd class="card__info-description">${data.type}</dd>
// <dt class="card__info-title">Occurrences</dt>
// <dd class="card__info-description">${data.episode}</dd>`

// divOne.append(nameOfChar, containerForInformation)
