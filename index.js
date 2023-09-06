import { createCharacterCard } from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

async function fetchCharactersAndRenderCard() {
  
  try {
    const response = await fetch (`https://rickandmortyapi.com/api/character?page=${page}`)
    console.log(response)
    const data = await response.json()
    maxPage = data.info.pages
    pagination.innerHTML=`${page}/${maxPage}`
    console.log(data)
    const characters = data.results 


    characters.forEach((character) => {
      console.log(character);
      const characterCard = createCharacterCard(character)
      cardContainer.appendChild(characterCard)
    });

  } catch {
    const errorMessage = 'Bad request'
    console.log(errorMessage);
  }
}

//pagination

prevButton.addEventListener('click', () => {
  if (page>=2) {
    page = page-1;
    pagination.append(page);
    cardContainer.innerHTML=''
    fetchCharactersAndRenderCard()
  } else {}
})

nextButton.addEventListener('click', () => {
  if (page<=42) {
  page = page+1;
  pagination.append(page);
  cardContainer.innerHTML=''
  fetchCharactersAndRenderCard()}
})

fetchCharactersAndRenderCard();