const fibonacci = (num) => {
  const fibonacciSequence = [0];
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return fibonacciSequence;
  } else if (num === 2) {
    fibonacciSequence.push(1);
    return fibonacciSequence;
  } else {
    fibonacciSequence.push(1);

    for (let i = 1; i < num - 1; i++) {
      let nextNumberInSequence =
        fibonacciSequence[i] + fibonacciSequence[i - 1];
      console.log(nextNumberInSequence);
      fibonacciSequence.push(nextNumberInSequence);
    }
    return fibonacciSequence;
  }
};

module.exports = fibonacci;
