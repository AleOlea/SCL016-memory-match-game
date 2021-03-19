const showWinnerMessage = (time, score) => {
    const winnerMessage = document.getElementById("winner");
    if (time <= 60 && score === 900) {
        winnerMessage.innerText = "You are a master!";
        console.log();
    } else if (time <= 120 && score === 900) {
        winnerMessage.innerText = "You are a pro!";

        console.log();
    } else {
        winnerMessage.innerText = "Try again!";
        console.log();
    }

    winnerMessage.style = "display:block";
    return winnerMessage;
};

const hideWinnerMessage = () => {
    const winnerMessage = document.getElementById("winner");
    winnerMessage.style = "display:none";
    return winnerMessage;
};

export { showWinnerMessage, hideWinnerMessage };