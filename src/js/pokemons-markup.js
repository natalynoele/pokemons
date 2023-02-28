export function createMarkupOfPokemonCard({
  name,
  abilities,
  sprites,
  height,
  weight,
  base_experience,
}) {
  return ` 
  <img class="header__img--left" src="./images/pokemon-logo.png" width="400px">  
  <p class="pokemon_card_background_title">${name}</p> 
  <h2 class="pokemon_card_title">${name}</h2>  
  
  <div class="abilities_wrap>
  <h3 class="abilities_title">Abilities</h3>
  <p class="detail">experience: ${base_experience}</p>
  <ul class="abilities">${createAbilitiesItemMarkup(abilities)} </ul>
  </div> 
 
   <div class="details-wrap"> 
   <div class="details">  
  <p class="detail">height: ${height}</p>
  <p class="detail">weight: ${weight}</p>  
  </div>
  <img class="pokemon_card_img" src="${
    sprites.other['official-artwork'].front_default
  }">
   </div> 
  `;
}

function createAbilitiesItemMarkup(abilities) {
  const items = abilities.map(element => {
    return `<li class="ability">${element.ability.name}</li> `;
  });
  return items.join('');
}

export function makeElementMarkup({ name, sprites }) {
  return `
  <li class="pokemon">
    <div class="pokemon_wrap" style="background-color:${getColor()}";>
     <p class="pokemon_name">${name}</p>
      <figure class="wrap_pokemon_thumb">
       <img class="pokemon_thumb" src="${
         sprites.other.dream_world.front_default
       }">
      </figure> 
      <button type="button" class="pokemon_btn">Click me!</button>      
     </div>
  </li>
  `;
}

function getColor() {
  return (
    'hsl(' +
    360 * Math.random() +
    ',' +
    (25 + 70 * Math.random()) +
    '%,' +
    (85 + 10 * Math.random()) +
    '%)'
  );
}
