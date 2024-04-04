export const sum = function (array: number[]) {
    return array.reduce((sum, item) => {
        return sum + item;
    }, 0);
};

export default {
    sum,
};
