const dogs = [{
  name: '맥스',
  size: '소형견',
  breed: '보스턴테리어',
  color: '검정',
}, {
  name: '도니',
  size: '대형견',
  breed: '래브라도레트리버',
  color: '검정',
}, {
  name: '섀도',
  size: '중형견',
  breed: '래브라도레트리버',
  color: '갈색',
}];

let filters = {};

function addFilters(filters, key, value) {
  filters[key] = value;
}
function deleteFilters(filters, key) {
  delete filters[key];
}
function clearFilters(filters) {
  filters = {};
  return filters;
}

let filters2 = new Map()
  .set('견종', '래브라도레트리버')
  .set('크기', '대형견')
  .set('색상', '갈색');
console.log(filters2.get('크기'));

let filters3 = new Map([
  ['견종', '래브라도리트리버'],
  ['크기', '대형견'],
  ['색상', '갈색'],
]);
console.log(filters3.get('견종'));

let errors = new Map([
  [100, '이름이 잘못되었습니다.'],
  [110, '이름에는 문자만 입력할 수 있습니다.'],
  [200, '색상이 잘못되었습니다.'],
]);

console.log(errors.get(100));
console.log(errors.keys());