const winnerMessage = document.createElement("div");
winnerMessage.id = "winner";
winnerMessage.innerText = "";
winnerMessage.style = "display:none";

root.appendChild(winnerMessage);
const showWinnerMessage = (time, score) => {
    if (time <= 60 && score === 900) {
        winnerMessage.innerText = "You are a master!";
        console.log();
    } else if (time <= 120 && score === 900) {
        winnerMessage.innerText = "You are a Pro!";

        console.log();
    } else {
        winnerMessage.innerText = "Try again!";
        console.log();
    }

    winnerMessage.style = "display:block";
};

export default showWinnerMessage;