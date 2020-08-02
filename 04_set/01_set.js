// Set를 이용해 배열에서 고유 항목만 분류한다.
// 각 항목을 하나씩만 갖는 특화된 배열과 같다.

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

function getColors(dogs) {
  return dogs.map(v => v['color'])
}

console.log(getColors(dogs));

function getUnique(attributes) {
  const unique = [];
  for (const attribute of attributes) {
    if (!unique.includes(attribute)) {
      unique.push(attribute);
    }
  }
  return unique;
}

const colors = getColors(dogs);
console.log(getUnique(colors));

const colors2 = ['검정색', '검정색', '갈색'];
const unique = new Set(colors2);
console.log(unique);

function getUnique2(attributes) {
  return [...new Set(attributes)];
}

console.log(getUnique2(colors2));

function getUniqueColors(dogs) {
  const unique = new Set();
  for (const dog of dogs) {
    console.log(dog);
    unique.add(dog.color);
  }
  return [...unique];
}

console.log(getUniqueColors(dogs));

[...dogs.reduce((colors, { color }) => colors.add(color), new Set())];