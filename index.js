import { createCharacterCard } from "./components/card/card.js";
import { fetchCharactersAndRenderCard } from "./fetchCharactersAndRenderCard.js";
import { resetPage } from "./components/reset-button/reset-button.js";

export const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
export const searchInput = document.querySelector('[data-js="searchInput"]');
export const cardContainer = document.querySelector('[data-js="card-container"]');

 const resetButton = document.querySelector('[data-js="button-reset"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";
let statusQuery = "alive";

//pagination :

prevButton.addEventListener('click', async() => {
  if (page>=2) {
    page -= 1;
    pagination.innerHTML = `${page} / ${maxPage}`
    fetchCharactersAndRenderCard(page, searchQuery, statusQuery)}
})

nextButton.addEventListener('click', async() => {
  if (page<=42) {
    page += 1
  pagination.innerHTML = `${page} / ${maxPage}`
  fetchCharactersAndRenderCard(page, searchQuery, statusQuery)
}})

fetchCharactersAndRenderCard(page, searchQuery, statusQuery);

//navigation : 
// resetPage(page, searchQuery, searchBar);

searchBar.addEventListener("input", (event) => {
  searchQuery = event.target.value
});

searchBar.addEventListener("submit", async(event) => {
  event.preventDefault();
  fetchCharactersAndRenderCard(page, searchQuery, statusQuery);
  searchBar.reset()
});

resetButton.addEventListener("click", async () => {
  const done = await resetPage(1, "", 42)
  searchQuery = ""
})