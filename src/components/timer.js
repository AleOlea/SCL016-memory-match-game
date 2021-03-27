let time = 0;
let interval = undefined;

const startTimer = () => {
    let startingMinutes = 0;
    time = startingMinutes * 60;

    interval = setInterval(updateCountdown, 1000);
};

const twoDigits = (n) => {
    if (n < 10) {
        return `0${n}`;
    }
    return n;
};

const updateCountdown = () => {
    const timer = document.getElementById("timer");

    time++;
    const minutes = Math.floor(time / 60); // function returns the largest integer less than or equal to a given number.
    let seconds = time % 60;
    timer.innerText = `${twoDigits(minutes)}:${twoDigits(seconds)}`;
};

const stopTimer = (shouldReset = false) => {
    if (shouldReset) {
        const timer = document.getElementById("timer");

        timer.innerText = "00:00";
    }
    if (interval) {
        clearInterval(interval); // if is not undefined
    }
    return time;
};

export { startTimer, stopTimer, twoDigits, updateCountdown };