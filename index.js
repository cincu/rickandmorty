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
const maxPage = 1;
const page = 1;
const searchQuery = "";


//fetch the data: 
// Now we can fetch the character data from the API and generate our cards with it.

// - Inside of the `index.js` create a function called `fetchCharacters`.
// - Use your knowledge about fetching to get the first 20 characters from the API.
//  You can find the
//   correct API endpoint in the docs.
// - Import the `createCharacterCard` function.
// - After successfully fetching the character data, use array methods to create
//  an HTML card for each
//   character and append it to the `cardContainer`.
// - Make sure that the `cardContainer` is emptied every time new characters are
//  fetched (HINT: you can
//   use `innerHTML = ''` for that).
// - Call the function inside the `index.js`. Now you should see 20 cards in your app.

async function fetchCharactersAndRenderCard() {
  
  try {
    const response = await fetch ('https://rickandmortyapi.com/api/character')
    console.log(response)
    const data = await response.json()
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

fetchCharactersAndRenderCard();
   //rendering card with forEach function
   //it requires a function Card() >>> creates and appends the card
   //renderElement() function appends the created element to the body/root/main etc.
