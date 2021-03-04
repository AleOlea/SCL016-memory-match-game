import pokemon from "../data/pokemon/pokemon.js";
console.log(pokemon);

let dataPokemon = pokemon.items;

/*import casa from "./card.js"*/
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//import pokemon from '../data/pokemon/pokemon.js';//
//console.log(pokemon);
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

const pokeNames = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
];
let gameStarted = false;
let firstCardIndex = -1;
let cards = [];
let score = 0;

const App = () => {
    const header = document.createElement("header");
    document.body.appendChild(header);

    const title = document.createElement("h1");
    document.body.appendChild(title);
    title.innerHTML = "atrapalos ya!";
    header.appendChild(title);

    const startGameButton = document.createElement("div");
    startGameButton.id = "startGame";
    startGameButton.innerText = "Lets play";
    startGameButton.addEventListener("click", start);
    header.appendChild(startGameButton);

    const cardsBox = document.createElement("div");
    cardsBox.className = "memory-cards";
    document.body.appendChild(cardsBox);

    const scoreGame = document.createElement("div");
    scoreGame.id = "score";
    document.body.appendChild(scoreGame);

    for (let i = 0; i < 18; i++) {
        const card = document.createElement("card");
        card.className = "pokecards";
        card.id = i;
        card.addEventListener("click", handleCardClick);
        cards.push(card);
        cardsBox.appendChild(card);
        /*console.log(card)*/
    }
    initializeCards();
};

const start = (e) => {
    if (gameStarted) {
        initializeCards();
    }
    gameStarted = true;
    e.target.innerText = "Play again";
};

//if negative result then do  nothing if postive swap the items -0.5 and 0.5
const shuffle = (items) => {
    items.sort(() => Math.random() - 0.5);
};

const initializeCards = () => {
    firstCardIndex = -1;
    score = 0;
    shuffle(pokeNames);
    pokeNames.forEach((name, index) => console.log(index, name));
};

const handleCardClick = (e) => {
    if (gameStarted) {
        console.log(e.target.id);
        let currentCardIndex = e.target.id;

        const imageUrl = dataPokemon.find(
            (item) => item.id === pokeNames[currentCardIndex]
        ).image; //cambiar por pokemon?
        e.target.style.backgroundImage = `url("${imageUrl}")`;
        if (firstCardIndex === -1) {
            firstCardIndex = currentCardIndex;
        } else {
            if (pokeNames[firstCardIndex] === pokeNames[currentCardIndex]) {
                score += 1;
                document.getElementById("score").innerText = score * 100 + " points!";

                console.log("Score is:", score);
            } else {
                const oldFirstCardIndex = firstCardIndex;
                setTimeout(function() {
                    cards[
                        oldFirstCardIndex
                    ].style.backgroundImage = `url("images/ball.png")`;
                    cards[
                        currentCardIndex
                    ].style.backgroundImage = `url("images/ball.png")`;
                }, 1500);
            }
            firstCardIndex = -1;
        }
    }
};

//if negative result then do  nothing if postive swap the items -0.5 and 0.5
/*const shuffle = (items) => {
    items.sort(() => Math.random() - 0.5);
};*/

export default App;