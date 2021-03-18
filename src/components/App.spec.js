/*import fs from "fs";*/
import App from "./App.js";
/*import showWinnerMessage from "./winner.js";*/

/*window.document.body.innerHTML = fs.readFileSync("./src/index.html");*/

describe("App", () => {
    it("should render without crashing", () => {
        const el = App();

        expect(el instanceof HTMLElement).toBe(true);
    });
});

/*describe("showWinnerMessage", () => {
    it("time <= 60 && score === 900 it should return message your are a master", () => {
        expect(showWinnerMessage(60, 900)).toBe(true);
    });
});*/