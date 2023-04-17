function fetchPokemonData() {
    return '{"abilities":[{"ability":{"name":"rain-dish","url":"https://pokeapi.co/api/v2/ability/44/"},"is_hidden":true,"slot":3},{"ability":{"name":"torrent","url":"https://pokeapi.co/api/v2/ability/67/"},"is_hidden":false,"slot":1}],"base_experience":63,"forms":[{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-form/7/"}],"height":5,"held_items":[],"id":7,"is_default":true,"location_area_encounters":"https://pokeapi.co/api/v2/pokemon/7/encounters","name":"squirtle","order":10,"species":{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-species/7/"},"sprites":{"back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png","back_female":null,"back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png","back_shiny_female":null,"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png","front_female":null,"front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png","front_shiny_female":null},"stats":[{"base_stat":43,"effort":0,"stat":{"name":"speed","url":"https://pokeapi.co/api/v2/stat/6/"}},{"base_stat":64,"effort":0,"stat":{"name":"special-defense","url":"https://pokeapi.co/api/v2/stat/5/"}},{"base_stat":50,"effort":0,"stat":{"name":"special-attack","url":"https://pokeapi.co/api/v2/stat/4/"}},{"base_stat":65,"effort":1,"stat":{"name":"defense","url":"https://pokeapi.co/api/v2/stat/3/"}},{"base_stat":48,"effort":0,"stat":{"name":"attack","url":"https://pokeapi.co/api/v2/stat/2/"}},{"base_stat":44,"effort":0,"stat":{"name":"hp","url":"https://pokeapi.co/api/v2/stat/1/"}}],"types":[{"slot":1,"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"}}],"weight":90}';
  }

  
 //--Converting Json data into JS object

const parsedObject=JSON.parse(fetchPokemonData());
  const sprites= parsedObject.sprites;
  const spriteImg = Object.values(sprites);

  const ul=document.createElement('ul');
  ul.style.margin = '0 auto';
  ul.style.listStyleType="none";

  //--initialling the urls 
  const filteredImg=spriteImg.filter(url=>url !== null);

  filteredImg.forEach(el => {
    const img=document.createElement('img');
    img.setAttribute('src',el)
    const li=document.createElement('li');
    li.appendChild(img);
    ul.appendChild(li);
  });
  
  document.body.appendChild(ul);

 


