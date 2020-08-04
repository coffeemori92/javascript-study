const dogs = [{
  name: '맥스',
  size: '소형견',
  breed: '보스턴테리어',
  color: '검정',
  weight: 10,
  region: '위스콘신',
}, {
  name: '도니',
  size: '대형견',
  breed: '래브라도레트리버',
  color: '검정',
  weight: 90,
  region: '캔자스',
}, {
  name: '섀도',
  size: '중형견',
  breed: '래브라도레트리버',
  color: '갈색',
  weight: 40,
  region: '위스콘신',
}];

function getDogNames(dogs, filter) {
  const [key, value] = filter;
  return dogs
    .filter(dog => dog[key] === value)
    .map(dog => dog['name']);
}
console.log(getDogNames(dogs, ['color', '검정']));

function getDogNames2(dogs, filterFunc) {
  return dogs 
    .filter(filterFunc)
    .map(dog => dog['name']);
}
console.log(getDogNames2(dogs, dog => dog['weight'] < 20));

const weightCheck = weight => dog => dog['weight'] < weight;
console.log(getDogNames2(dogs, weightCheck(20)));

const identity = field => value => dog => dog[field] === value;
const colorCheck = identity('color');
const statecheck = identity('region');
console.log(getDogNames2(dogs, colorCheck('갈색')));
console.log(getDogNames2(dogs, statecheck('캔자스')));

function allFilters(dogs, ...checks) {
  return dogs
    .filter(dog => checks.every(check => check(dog)))
    .map(dog => dog['name'])
}
console.log(allFilters(dogs, colorCheck('검정'), statecheck('캔자스')));

function anyFilters(dogs, ...checks) {
  return dogs
    .filter(dog => checks.some(check => check(dog)))
    .map(dog => dog['name']);
}

console.log(anyFilters(dogs, weightCheck(20), colorCheck('갈색')));