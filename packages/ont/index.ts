export const sum = (array: number[]) => {
  return array.reduce((sum, item) => {
    return sum + item;
  }, 0);
};
