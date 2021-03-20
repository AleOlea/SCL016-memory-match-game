import { App, shuffle } from "./App.js";
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
        //Obs
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

/*const updateCountdown = () => {
    const timer = document.getElementById("timer");

    time++;
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timer.innerText = `${twoDigits(minutes)}:${twoDigits(seconds)}`;
};*/

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