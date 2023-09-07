import { createCharacterCard } from "./components/card/card.js";
import { fetchCharactersAndRenderCard } from "./fetchCharactersAndRenderCard.js";
import { resetPage } from "./components/reset-button/reset-button.js";

const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
export const searchInput = document.querySelector('[data-js="searchInput"]');
export const cardContainer = document.querySelector('[data-js="card-container"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";


//pagination :

prevButton.addEventListener('click', async() => {
  if (page>=2) {
    page = page-1;
    pagination.append(page);
    cardContainer.innerHTML=''
    fetchCharactersAndRenderCard(page, searchQuery)}
})

nextButton.addEventListener('click', async() => {
  if (page<=42) {
  page = page+1;
  pagination.append(page);
  cardContainer.innerHTML=''
  fetchCharactersAndRenderCard(page, searchQuery)
}})

fetchCharactersAndRenderCard(page, searchQuery);

//navigation : 

searchBar.addEventListener("input", (event) => {
  searchQuery = event.target.value
});


searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  fetchCharactersAndRenderCard(page, searchQuery);
  searchBar.reset()});

  resetPage(page, searchQuery, searchBar);