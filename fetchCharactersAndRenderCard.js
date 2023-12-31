import { createCharacterCard } from "./components/card/card.js"
import { cardContainer } from "./index.js"

const pagination = document.querySelector('[data-js="pagination"]');

export async function fetchCharactersAndRenderCard(page =1, searchQuery, statusQuery ) {
    try {
      //api fetch
      const apiUrl =`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}&status=${statusQuery}`
      const response = await fetch (apiUrl)
      console.log(response)
      //parse data as JSON
      const data = await response.json()
      //extract the array of characters from the response data
      const characters = data.results
      console.log(data)
      //page update
      pagination.innerHTML=`${page}/${data.info.pages}`
      //array method map to create cards from the array 
        const characterCards = characters.map((character) => {return createCharacterCard(character)}).join('');
      cardContainer.innerHTML = characterCards
          return data

    } catch (error) {
    alert('NOT A CHARACTER')
     console.log(error);
    }
  }
  