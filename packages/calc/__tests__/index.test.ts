import { numToWord, wordToNum } from "../index";

describe("test number", () => {
    test("should test numToWord", () => {
        expect(numToWord(0)).toBe("零");
    });
    test("should test numToWord", () => {
        expect(wordToNum("零")).toBe(0);
    });
});
