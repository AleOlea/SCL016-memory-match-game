import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);

let dataPokemon = pokemon.items;

// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
//import pokemon from '../data/pokemon/pokemon.js';//
//console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//


//comienzo sugerido de la funcion???

const App = () => {
    const el = document.createElement('div');
    el.className = "App";
    el.textContent = "pokebolas";
    const cards = document.createElement("card")
    el.appendChild(cards);
    cards.class = "pokecard";


}



const pokeNames = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle",
    "wartortle", "blastoise", "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise"
]

const startGame = document.getElementById("startGame");
startGame.addEventListener("click", function(e) {

    firstCardIndex = -1;
    cards.forEach(card => cards);
    console.log("Game On");

    //if negative result then do  nothing if postive swap the items -0.5 and 0.5 
    function shuffle(pokeball) {
        pokeball.sort(() => Math.random() - 0.5);
    }
    //to print index and name of card on the console
    shuffle(pokeNames);
    pokeNames.forEach((name, index) => console.log(index, name))

})

//Images

function turnCard(e, id) {
    e.target.innerText = pokeNames[id]
}

let firstCardIndex = -1;
let score = 0;
const cardsDiv = document.getElementsByClassName("memory-cards")[0]; //why index 0?
let cards = Array.from(cardsDiv.children)

cards.forEach((card, i) => card.addEventListener("click", function(e) {

    const imageUrl = dataPokemon.find(item => item.id === pokeNames[i]).image; //cambiar por pokemon?
    card.style.backgroundImage = `url("${imageUrl}")`
    if (firstCardIndex === -1) {
        firstCardIndex = i;
    } else {
        if (pokeNames[firstCardIndex] === pokeNames[i]) {
            score += 1

            document.getElementById(scores);
            scores.innerText = (score * 100 + " points!");

            console.log("Score is:", score)
        } else {
            const oldFirstCardIndex = firstCardIndex;
            setTimeout(function() {

                cards[oldFirstCardIndex].style.backgroundImage = `url("ball.png")`;
                cards[i].style.backgroundImage = `url("ball.png")`;
            }, 1500);
        }
        firstCardIndex = -1;

    }

}));


export default App;