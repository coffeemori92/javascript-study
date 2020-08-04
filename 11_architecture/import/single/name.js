import { capitalize } from './util';

function greet(name) {
  return  `Hello, ${capitalize(name)}!`;
}

console.log(greet('ashley'));

export { greet };