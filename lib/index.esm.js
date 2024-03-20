var sum = function (array) {
    return array.reduce(function (sum, item) {
        return sum + item;
    }, 0);
};

export { sum };
