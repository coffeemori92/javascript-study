const filters = new Map([
  ['color', '검정색'],
  ['견종', '래브라도리트리버']
]);

function checkFilters(filters) {
  for (const entry of filters) {
    console.log(entry);
  }
}
console.log(filters.entries());
checkFilters(filters);

console.log(...filters);

function sortByKey(a, b) {
  return a[0] > b[0] ? 1 : -1;
}

function getSortedAppliedFilters(filters) {
  const applied = [];
  for (const [key, value] of [...filters].sort(sortByKey)) {
    applied.push(`${key}: ${value}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}

console.log(getSortedAppliedFilters(filters));