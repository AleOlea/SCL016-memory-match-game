let timer = {};
let currentTimer = 0,
    interval = 0,
    lastUpdateTime = new Date().getTime(),
    start = document.getElementById("startTimer"),
    stop = document.getElementById("stopTimer"),
    reset = document.getElementById("resetTimer"),
    mins = document.getElementById("minutes"),
    secs = document.getElementById("seconds");

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

function pad(n) {
    return ("00" + n).substr(-2);
}

function update() {
    let now = new Date().getTime(),
        dt = now - lastUpdateTime;

    currentTimer += dt;

    let time = new Date(currentTimer);

    mins.innerHTML = pad(time.getMinutes());
    secs.innerHTML = pad(time.getSeconds());
    lastUpdateTime = now;
}

timer.startTimer = () => {
    if (!interval) {
        lastUpdateTime = new Date().getTime();
        interval = setInterval(update, 1);
    }
};

timer.stopTimer = () => {
    clearInterval(interval);
    interval = 0;
};

timer.resetTimer = () => {
    stopTimer();

    currentTimer = 0;

    mins.innerHTML = secs.innerHTML = pad(0);
};

export default timer;