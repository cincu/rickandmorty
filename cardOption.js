const body = document.querySelector('[data-js="card-container"]')

createCharacterCard() {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card__image-container')
    body.append(cardContainer)

    const card = document.createElement('image')
    card.classList.add('card__image')
    cardContainer.append(card)

    //image

    const divOne = document.createElement('div')
    divOne.classList.add('card__content')
    //div with all the info

    const nameOfChar = document.createElement('h2')
    nameOfChar.classList.add('card__title')
    //name of the character

    const containerForInformation = document.createElement('dl')
    containerForInformation.innerHTML += 
    `<dt class="card__info-title">Status</dt>
    <dd class="card__info-description">${data.status}</dd>
    <dt class="card__info-title">Type</dt>
    <dd class="card__info-description">${data.type}</dd>
    <dt class="card__info-title">Occurrences</dt>
    <dd class="card__info-description">${data.episode}</dd>`
    
    divOne.append(nameOfChar, containerForInformation)

}
