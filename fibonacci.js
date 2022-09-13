const fibonacci = (num) => {
  const fibonacciSequence = [];

    for (let i = 0; i <= num - 1; i++) {
      if (fibonacciSequence.length < 2) {
        fibonacciSequence.push(i)
      } else {
      let nextNumberInSequence =
        fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
      fibonacciSequence.push(nextNumberInSequence);
    }
  }
  return fibonacciSequence;
};

module.exports = fibonacci;
