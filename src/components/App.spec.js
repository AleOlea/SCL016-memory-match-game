/*import fs from "fs";*/
import App from "./App.js";
/*window.document.body.innerHTML = fs.readFileSync("./src/index.html");*/

describe("App", () => {
    it("should render without crashing", () => {
        const el = App();

        expect(el instanceof HTMLElement).toBe(true);
    });
});