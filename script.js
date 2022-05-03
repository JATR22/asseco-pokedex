"use strict";

const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon?limit=150";

const pokemonGrid = document.querySelector(".pokemon-grid");
const container = document.querySelector(".container");

// const pokemonRequest = function () {
//   fetch(pokemonListUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       //   console.log(data.image);
//       console.log(data[image]);
//     });
// };
// pokemonRequest();

const pokemonRequest = new XMLHttpRequest();

pokemonRequest.open("GET", pokemonListUrl);
pokemonRequest.send();

pokemonRequest.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data.results);

  // for (let i = 0; i < data.length; i++) {}
  console.log(...data.results);

  let pokemons = data.results;
  let allPokemon = pokemons.map((pokemon) => pokemon);
  console.log(allPokemon);

  const html = `
  <article class="pokemon">
  <img class="pokemon__img" src="${allPokemon[0].url}" />
  <div class="pokemon__data">
    <h3 class="pokemon__name">${allPokemon[0].name}</h3>
  </div>
</article>

        `;
  container.insertAdjacentHTML("beforeend", html);
  container.style.opacity = 3;
});

// pokemonRequest.open("GET", pokemonListUrl),
//   (pokemonRequest.onload = function () {
//     const ourData = JSON.parse(pokemonRequest.responseText);
//     console.log(ourData.results);
//     image;
//     renderHTML(ourData);
//   });
// pokemonRequest.send();

// function renderHTML(data) {
//   let pokemons = "";
//   pokemonGrid.insertAdjacentHTML("beforeend", pokemons);
// }
