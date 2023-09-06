import { createCharacterCard } from "./components/card/card.js"
import { cardContainer } from "./index.js"

export async function fetchCharactersAndRenderCard(page, searchQuery) {
  
    try {
      const response = await fetch (`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`)
      console.log(response)
      const data = await response.json()
      const characters = data.results 
  
      const characterCards = characters.map((character) => {
        return createCharacterCard(character);
      }).join('');
      cardContainer.innerHTML = characterCards;
    
      return data
  
    } catch (error) {
      console.log(error);
    }
  }
  