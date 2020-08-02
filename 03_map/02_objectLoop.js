const filters = {
  color: '검정색',
  breed: '래브라도리트리버',
};

function getAppliedFilters(filters) {
  const keys = Object.keys(filters);
  console.log('keys', keys);
  const applied = [];
  for (const key of keys) {
    applied.push(`${key}: ${filters[key]}`);
  }
  console.log(applied);
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}

console.log(getAppliedFilters(filters));