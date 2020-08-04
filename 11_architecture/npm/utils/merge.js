import lodash, { fromPairs } from 'lodash';

export const mapToObject = map => fromPairs([...map]);
export const objectToMap = object => {
  const pairs = lodash.toPairs(object);
  return new Map(pairs);
}