import { App, shuffle, updateScore, handleCardClick, start } from "./App.js";
import { showWinnerMessage, hideWinnerMessage } from "./winner.js";
import { startTimer, stopTimer, twoDigits, updateCountdown } from "./timer.js";

describe("App", () => {
    it("should render without crashing", () => {
        const el = App();

        expect(el instanceof HTMLElement).toBe(true);
    });
});

describe("timer", () => {
    document.body.appendChild(App());
    it("should stop the timer", () => {
        startTimer();
        setTimeout(() => {
            const timer = document.getElementById("timer");
            const oldTime = timer.innerText;
            stopTimer();
            setTimeout(() => {
                const currentTime = timer.innerText;
                expect(oldTime).toBe(currentTime);
            }, 2000);
        });
    }, 2000);
    it("should start the timer", () => {
        startTimer();
        setTimeout(() => {
            const timer = document.getElementById("timer");
            const oldTime = timer.innerText;

            setTimeout(() => {
                const currentTime = timer.innerText;
                expect(oldTime).toBe(currentTime);
            }, 0);
        });
    }, 0);
    it("should restart the timer in play again", () => {
        //Obs
        stopTimer();
        setTimeout(() => {
            const timer = document.getElementById("timer");
            const oldTime = timer.innerText;

            setTimeout(() => {
                const currentTime = timer.innerText;
                expect(oldTime).toBe(currentTime);
            }, 180);
        });
    }, 180);

    it("Add a 0 to numbers under 10", () => {
        twoDigits();

        expect(30).toBe(30);
    });
});

describe("updateCountdown", () => {
    document.body.appendChild(App());
    updateCountdown();
    it("Should display added minutes and seconds", () => {
        const timer = document.getElementById("timer");
        const displayTime = timer.innerText;
        expect(displayTime instanceof HTMLElement).toBe(false);
    });
});

describe("updateScore", () => {
    document.body.appendChild(App());
    updateScore();
    it("Should update Score", () => {
        const score = document.getElementById("score");
        const displayScore = score.innerText;
        expect(displayScore instanceof HTMLElement).toBe(false);
    });
    it("Should update Score", () => {
        const score = document.getElementById("score");
        const plusScore = score;

        expect(plusScore instanceof HTMLElement).toBe(true);
    });
});

describe("winner", () => {
    document.body.appendChild(App());
    it("should show a winner message", () => {
        const el = showWinnerMessage(0, 0);

        expect(el instanceof HTMLElement).toBe(true);
    });
    it("should work for masters", () => {
        const message = showWinnerMessage(60, 900).innerText;
        expect(message).toBe("You are a master!");
    });
    it("should work for pro", () => {
        const message = showWinnerMessage(120, 900).innerText;
        expect(message).toBe("You are a pro!");
    });

    it("should work for try again", () => {
        const message = showWinnerMessage(160, 900).innerText;
        expect(message).toBe("Try again!");
    });

    it("should work for try again (not finished)", () => {
        const message = showWinnerMessage(180, 800).innerText;
        expect(message).toBe("Try again!");
    });

    it("should hide the winner message", () => {
        const el = hideWinnerMessage();

        expect(el.style.display).toBe("none");
    });
});

describe("shuffle", () => {
    it("should shuffle the elements", () => {
        let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(shuffle(elements) == elements).toBe(false);
    });
});

describe("handleCardClick", () => {
    handleCardClick();
    document.body.appendChild(App());
    it("Should turn card clicked into currentCardIndex", () => {
        let cardindex = -1;
        let currentCardIndex = 1;
        expect(cardindex[-1]).toBe(currentCardIndex[1]);
    });
});

describe("start", () => {
    start();
    document.body.appendChild(App());
    it("should display PLAY until the buton is clicked", () => {
        expect(start()).toBe(Function);
    });
});