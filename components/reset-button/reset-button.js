import { fetchCharactersAndRenderCard } from "../../fetchCharactersAndRenderCard.js";
export const resetButton = document.querySelector('[data-js="button-reset"]');
export const pagination = document.querySelector('[data-js="pagination"]');

export function resetPage(page, searchQuery, searchBar, maxPage) {
  resetButton.addEventListener("click", async () => {
    page = 1; // Set the page to the first page
    searchQuery = "";
    searchBar.reset();

    // Fetch and render characters for the first page immediately
    const response = await fetchCharactersAndRenderCard(page, searchQuery);
    maxPage = await response.info.pages;
    pagination.innerHTML = `${page}/${maxPage}`; // Update the pagination text
  });
}
