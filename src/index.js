module.exports = function reverse(num) {
  return Number(
    String(num)
      .split('')
      .filter((char) => char !== '-' && char !== '+')
      .reverse()
      .join('')
  );
  // throw new Error('Not implemented');
};
