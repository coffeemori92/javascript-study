function convertWeight(weight, ounces = 0, roundTo = 2) {
  const total = weight + (ounces / 16);
  const conversion = total / 2.2;
  return roundToDecimalPlace(conversion, roundTo);
}

