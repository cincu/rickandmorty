import { createCharacterCard } from "./components/card/card.js";
import { fetchCharactersAndRenderCard } from "./fetchCharactersAndRenderCard.js";
export const cardContainer = document.querySelector('[data-js="card-container"]');

const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";


//pagination


prevButton.addEventListener('click', async() => {
  if (page>=2) {
    page = page-1;
    pagination.append(page);
    cardContainer.innerHTML=''
    const response = await fetchCharactersAndRenderCard(page, searchQuery)
    maxPage = await response.info.pages
    pagination.innerHTML=`${page}/${maxPage}`
  } else {}
})

nextButton.addEventListener('click', async() => {
  if (page<=42) {
  page = page+1;
  pagination.append(page);
  cardContainer.innerHTML=''
  const response = await fetchCharactersAndRenderCard(page, searchQuery)
    maxPage = await response.info.pages
  pagination.innerHTML=`${page}/${maxPage}`
}})

fetchCharactersAndRenderCard(page, searchQuery);

//nav-bar: 

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  page = 1;
  fetchCharactersAndRenderCard(page, searchQuery);
  searchBar.reset()
});

