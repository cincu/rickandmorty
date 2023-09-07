import { fetchCharactersAndRenderCard } from "../../fetchCharactersAndRenderCard.js";
import { searchBar } from "../../index.js";

export const pagination = document.querySelector('[data-js="pagination"]');

export const resetPage = async(page, searchQuery, maxPage)=> {
    searchBar.reset();
    // Fetch and render characters for the first page immediately
    const response = await fetchCharactersAndRenderCard(page, searchQuery);
    maxPage = await response.info.pages;
    pagination.innerHTML = `${page}/${maxPage}`; // Update the pagination text
    return response
  }
