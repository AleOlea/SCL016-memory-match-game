import pokemon from "../data/pokemon/pokemon.js";
import { startTimer, stopTimer } from "../components/timer.js";
import { showWinnerMessage, hideWinnerMessage } from "../components/winner.js";

/*console.log(pokemon); .*/

//Global Variables
let dataPokemon = pokemon.items;

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

//Flag set to false.  When the user clicks on play it will be set to true
let gameStarted = false;
//Keep track card first to be clicked in a pair, when done returns to -1
let firstCardIndex = -1;
//List save cards as html elements.
let cards = [];

let score = 0;

let matches = []; //    ????? how it works?

//Main functions
const App = () => {
    //creating HTML elements

    const main = document.createElement("main");

    const header = document.createElement("header");
    main.appendChild(header);

    const title = document.createElement("h1");
    title.innerHTML = "Pokemon Memory Card Game";
    header.appendChild(title);

    const cardsBox = document.createElement("div");
    cardsBox.className = "memory-cards";
    main.appendChild(cardsBox);
    //For loop to Add 18 cards within the div container
    for (let i = 0; i < 18; i++) {
        const card = document.createElement("card");
        card.className = "pokecards";
        card.id = i;
        card.addEventListener("click", handleCardClick);
        cards.push(card); //add to list of cards be use later to change each of them
        cardsBox.appendChild(card);
        /* console.log(card);*/
    }

    const startGameButton = document.createElement("div");
    startGameButton.id = "startGame";
    startGameButton.innerText = "PLAY";
    startGameButton.addEventListener("click", start);
    main.appendChild(startGameButton);

    const scoreGame = document.createElement("div");
    scoreGame.id = "score";
    scoreGame.innerText = "0 points";

    header.appendChild(scoreGame);

    const timer = document.createElement("div");
    timer.id = "timer";

    header.appendChild(timer);
    timer.innerText = "00:00";

    const footer = document.createElement("footer");
    main.appendChild(footer);
    footer.innerText = "LAB 2021";

    const winnerMessage = document.createElement("div");
    winnerMessage.id = "winner";
    winnerMessage.innerText = "";
    winnerMessage.style = "display:none";
    header.appendChild(winnerMessage);

    return main;
};

//Click on cards and they will turn. set the flag called "gameStarted" to true.
const start = (e) => {
    if (gameStarted) {
        initializeCards();
        gameStarted = false;
        e.target.innerText = "PLAY";
        stopTimer(true);
        hideWinnerMessage();
    } else {
        initializeCards();
        gameStarted = true;
        e.target.innerText = "Game On";
        startTimer();
        setTimeout(() => {
            if (score === 900) {
                let time = stopTimer(); //hice cambio y funciona en juego probado
                showWinnerMessage(time, score);
            }
        }, 180 * 1000);
    }
};

//To suffle cards
const shuffle = (items) => {
    items.sort(() => Math.random() - 0.5);
};

const initializeCards = () => {
    firstCardIndex = -1; //-1 meaans we are not betwen a guess.
    updateScore(0); //calling function defined lower in the code.
    shuffle(pokeNames);
    pokeNames.forEach((name, index) => {
        console.log(Math.floor(index / 6), index % 6, name);
        turnCardBack(cards[index]); //for loop turns all cards back red ball/function defined lower in the code.
    });
};
//Function called everytime we click in a card.
//First part is cheching if game started is true for cards to be clickable.
const handleCardClick = (e) => {
    if (gameStarted) {
        console.log(e.target.id);

        let currentCardIndex = e.target.id;
        if (matches.includes(pokeNames[currentCardIndex])) {
            return; //should ignore this card becuse has been aleady been matched
        }
        // happens the "turning" of the card.
        const imageUrl = dataPokemon.find(
            (item) => item.id === pokeNames[currentCardIndex]
        ).image;

        e.target.style.backgroundImage = `url("${imageUrl}")`;

        //branchig two cases.  dealing with the first card.
        if (firstCardIndex === -1) {
            firstCardIndex = currentCardIndex; //first card clicked
        } else {
            //dealing with the second card. comparing the names
            if (pokeNames[firstCardIndex] === pokeNames[currentCardIndex]) {
                updateScore(score + 100);
                matches.push(pokeNames[firstCardIndex]);
                console.log("Score is:", score);
            } else {
                //turn both cards back
                const oldFirstCardIndex = firstCardIndex;

                setTimeout(function() {
                    turnCardBack(cards[oldFirstCardIndex]);
                    turnCardBack(cards[currentCardIndex]);
                }, 800);
            }

            firstCardIndex = -1;
        }
    }
};

const turnCardBack = (card) => {
    card.style.backgroundImage = `url("images/ball.png")`;
};

const updateScore = (newScore) => {
    console.log("manzana");
    score = newScore;
    document.getElementById("score").innerText = score + " points";
    if (score === 900) {
        let time = stopTimer();
        showWinnerMessage(time, score);
    }
};

/*export default App;*/
export { App, shuffle, initializeCards };