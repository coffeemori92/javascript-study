import * as utils from './util';

function greet(name) {
  return `Hello, ${utils.capitalize(name)}!`;
}

console.log(greet('ashley'));