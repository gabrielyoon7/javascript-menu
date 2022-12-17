const { OutputView } = require('../views/OutputView');
const { ERROR_MESSAGE } = require('./constants');

const isFoodNumberTooBig = (foods) => {
  if (foods.length > 2) {
    return true;
  }
  return false;
};
const isValidFoods = (answer) => {
  const foods = answer.split(',');
  console.log(`입력된 음식의 길이는!${foods.length}`);
  if (isFoodNumberTooBig(foods)) {
    OutputView.print(ERROR_MESSAGE.tooManyFoods);
    throw new Error(ERROR_MESSAGE.tooManyFoods);
  }
};

module.exports = {
  isValidFoods,
};
