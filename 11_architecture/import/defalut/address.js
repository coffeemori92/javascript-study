import { capitalize } from '../single/util';

export function parseRegion(address) {
  const region = address.state || address.providence || '';
  return region.toUpperCase();
}

export function parseStreet({ street }) {
  return street.split(' ').map(v => capitalize(v)).join(' ');
}

export default function normalize(address) {
  const street = parseStreet(address);
  const city = address.city;
  const region = parseRegion(address);
  return `${street} ${city} ${region}`;
}