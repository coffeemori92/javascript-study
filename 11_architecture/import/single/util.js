function getPower(decimalPlaces) {
  return 10 ** decimalPlaces;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function roundToDecimalPlace(numer, decimalPlaces = 2) {
  const round = getPower(decimalPlaces);
  return Math.round(numer * round) / round;
}

export { capitalize, roundToDecimalPlace };

