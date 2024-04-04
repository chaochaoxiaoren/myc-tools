import numRef from "./assets/number";

export const numToWord = function(num: number) {
    return numRef.reduce((accum, ref) => {
        return ref.num === num ? ref.word : accum;
    }, "");
}

export const wordToNum = function(word: string) {
    return numRef.reduce((accum, ref) => {
        return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
}

export default {
    numToWord,
    wordToNum
}
