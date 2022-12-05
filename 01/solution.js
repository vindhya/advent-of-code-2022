const lineReader = require('../utils/lineReader');

const findMax = array => {
  let max = array[0];

  array.forEach(item => {
    if (item > max) max = item;
  });

  return max;
};

const compareNumbers = (a, b) => b - a;

lineReader('01/input.txt').then(array => {
  const elves = [0];
  let currentIndex = 0;

  array.forEach(item => {
    if (item === '') {
      currentIndex++;
      elves.push(0);
    } else {
      elves[currentIndex] += parseInt(item);
    }
  });

  const sum = elves
    .sort(compareNumbers)
    .slice(0, 3)
    .reduce((acc, curr) => acc + curr, 0);

  console.log(sum);
});
