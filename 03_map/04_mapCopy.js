const defaults = new Map()
    .set('색상', '갈색')
    .set('견종', '비글')
    .set('지역', '캔자스');

const filters = new Map()
    .set('색상', '검정색');

function applyDefaults(map, defaults) {
  const copy = new Map([...map]);
  for (const [key, value] of defaults) {
    if (!copy.has(key)) {
      copy.set(key, value);
    }
  }
  return copy;
}

console.log(applyDefaults(filters, defaults));

function applyDefaults2(map, defaults) {
  return new Map([...defaults, ...map]);
}

console.log(applyDefaults2(filters, defaults));