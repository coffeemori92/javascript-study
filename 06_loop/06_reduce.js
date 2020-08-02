const callback = (collectedValues , item) => [...collectedValues, item];
const saying = ['veni', 'vedi', 'veci'];
const initialValue = [];
const copy = saying.reduce(callback, initialValue);

console.log(copy);

const dogs = [{
  name: '맥스',
  size: '소형견',
  breed: '보스턴테리어',
  color: '검정색',
}, {
  name: '도니',
  size: '대형견',
  breed: '래브라도리트리버',
  color: '검정색',
}, {
  name: '섀도',
  size: '중형견',
  breed: '래브라도리트리버',
  color: '갈색',
}];

const colors = dogs.reduce((colors, dog) => {
  if(colors.includes(dog['color'])) {
    return colors;
  }
  return [...colors, dog['color']];
}, []);

console.log(colors);

const colors2 = dogs.map(v => v.color);
console.log(colors2);

const colors3 = dogs.reduce((colors, dog) => {
  return [...colors, dog.color];
}, []);
console.log(colors3);

const array1 = [1, 2, 3, 4, 5];
const A = array1.reduce((acc, cur) => {
  return acc + cur
}, []);
console.log(A);

const filters = dogs.reduce((filters, item) => {
  filters.breed.add(item['breed']);
  filters.size.add(item['size']);
  filters.color.add(item['color']);
  return filters;
}, {
  breed: new Set(),
  size: new Set(),
  color: new Set(),
});

console.log(filters);

const developers = [{
  name: 'Jeff',
  language: 'php',
}, {
  name: 'Ashley',
  language: 'python',
}, {
  name: 'Sara',
  language: 'python',
}, {
  name: 'Joe',
  language: 'javascript',
}];

const aggredgated = developers.reduce((specialities, developer) => {
  const count = specialities[developer.language] || 0;
  return {
    ...specialities,
    [developer.language] : count + 1,
  };
}, {});

console.log(aggredgated);