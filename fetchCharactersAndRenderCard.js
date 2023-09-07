import { createCharacterCard } from "./components/card/card.js";
import { cardContainer } from "./index.js";
const pagination = document.querySelector('[data-js="pagination"]');
export async function fetchCharactersAndRenderCard(page = 1, searchQuery) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    console.log(page);
    const data = await response.json();
    const characters = data.results;
    console.log(data);
    pagination.innerHTML = `${page}/${data.info.pages}`;
    const characterCards = characters
      .map((character) => {
        return createCharacterCard(character);
      })
      .join("");
    cardContainer.innerHTML = characterCards;
    return data;
  } catch (error) {
    alert("NOT A CHARACTER");
    console.log(error);
  }
}
