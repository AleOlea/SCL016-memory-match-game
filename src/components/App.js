//import timer from "./timer.js";
import pokemon from "../data/pokemon/pokemon.js";
console.log(pokemon); //console index, id, name, image url.

//Global Variable
let dataPokemon = pokemon.items;

// O alternativamente podríamos cargar el JSON de forma asíncrona usando// `fetch` en el momento que consideremos necesario.
// fetch('./data/pokemon/pokemon.json')//   .then(resp => resp.json())//   .then(console.log)//   .catch(console.error);//

//Global Variables
//Every item is doubled
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
//Lis save cards as html elements, which contains id, backgorund images.
let cards = [];
//Sums up pairs matched
let score = 0;
//Main function where it is added the html elements
const App = () => {
    //creating the HTML
    const header = document.createElement("header");
    document.body.appendChild(header);

    const title = document.createElement("h1");
    document.body.appendChild(title);
    title.innerHTML = "Pokemon Memory Card Game";
    header.appendChild(title);

    const cardsBox = document.createElement("div");
    cardsBox.className = "memory-cards";
    document.body.appendChild(cardsBox);
    //Add 18 cards within the div container
    for (let i = 0; i < 18; i++) {
        const card = document.createElement("card");
        card.className = "pokecards";
        card.id = i;
        card.addEventListener("click", handleCardClick); //function after the event listener when each of them is clicked
        cards.push(card); //add to list of cards be use later to change each of them
        cardsBox.appendChild(card);
        /* console.log(card);*/
    }

    const startGameButton = document.createElement("div");
    startGameButton.id = "startGame";
    startGameButton.innerText = "PLAY";
    startGameButton.addEventListener("click", start); //function after the event listener
    document.body.appendChild(startGameButton);

    const scoreGame = document.createElement("div");
    scoreGame.id = "score";
    document.body.appendChild(scoreGame);

    const timer = document.createElement("div");
    timer.id = "timer";
    document.body.appendChild(timer);

    const controls = document.createElement("div");
    controls.id = "controls";
    timer.appendChild(controls);

    const startTimer = document.createElement("button");
    startTimer.id = "startTimer";
    controls.appendChild(startTimer);
    startTimer.innerText = "Start";

    const stopTimer = document.createElement("button");
    stopTimer.id = "stopTimer";
    controls.appendChild(stopTimer);
    stopTimer.innerText = "Stop";

    const resetTimer = document.createElement("button");
    resetTimer.id = "resetTimer";
    controls.appendChild(resetTimer);
    resetTimer.innerText = "Reset";

    const displayTime = document.createElement("div");
    displayTime.id = "displayTime";
    controls.appendChild(displayTime);

    const minutes = document.createElement("span");
    minutes.id = "minutes";
    displayTime.appendChild(minutes);
    minutes.innerText = "00:";

    const seconds = document.createElement("span");
    seconds.id = "seconds";
    displayTime.appendChild(seconds);
    seconds.innerText = "00";

    const footer = document.createElement("footer");
    document.body.appendChild(footer);
    footer.innerText = "LAB 2021";

    //function is recalled beacuse is used twice.
    initializeCards();
};

//This function will be called every time the button PLAY is click it will set the flag called "gameStarted" to true.
//From this point on we can click on cards and they will turn. And inizializing the cards(shufeling twice but only for the first time).

const start = (e) => {
    if (gameStarted) {
        initializeCards();
        //timer.startTimer();
        gameStarted = false;
        e.target.innerText = "PLAY";
    } else {
        gameStarted = true;
        e.target.innerText = "Game On";
    }
};

//To suffle cards. if negative result then do  nothing if postive swap the items -0.5 and 0.5
const shuffle = (items) => {
    items.sort(() => Math.random() - 0.5);
};
//first card index is set t o -1, it reshuffles
const initializeCards = () => {
    //TODO: reset the timer
    firstCardIndex = -1;
    updateScore(0);
    shuffle(pokeNames);
    pokeNames.forEach((name, index) => {
        console.log(Math.floor(index / 6), index % 6, name);
        turnCardBack(cards[index]);
    });
};
//This function is called everytime we click in a card
const handleCardClick = (e) => {
    if (gameStarted) {
        console.log(e.target.id);
        let currentCardIndex = e.target.id;
        const imageUrl = dataPokemon.find(
            (item) => item.id === pokeNames[currentCardIndex]
        ).image;

        e.target.style.backgroundImage = `url("${imageUrl}")`;
        //no card has been clicked previously or maybe or it was the last pair and it turned back so the index is restarted
        if (firstCardIndex === -1) {
            firstCardIndex = currentCardIndex;
        } else {
            if (pokeNames[firstCardIndex] === pokeNames[currentCardIndex]) {
                updateScore(score + 1);

                console.log("Score is:", score);
            } else {
                //creating a copy of the index lost in the 1500 and calling it old..to use whithin this set time out
                const oldFirstCardIndex = firstCardIndex;

                setTimeout(function() {
                    turnCardBack(cards[oldFirstCardIndex]);
                    turnCardBack(cards[currentCardIndex]);
                }, 1500);
            }

            firstCardIndex = -1;
        }
    }
};

const turnCardBack = (card) => {
    card.style.backgroundImage = `url("images/ball.png")`;
};

const updateScore = (newScore) => {
    score = newScore;
    document.getElementById("score").innerText = score * 100 + " points!";
};

export default App;