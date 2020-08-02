function getTimePermissions({ title }) {
  if (title === '과장') {
    return ['근로시간', '초과근무승인', '수당'];
  }
  if (title === '부장') {
    return ['근로시간', '초과근무승인']
  }
  return ['근로시간'];
}

const permissions = getTimePermissions({ title: '사원' });
console.log(permissions);