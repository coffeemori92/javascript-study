const firms = new Map([
  ['10', 'Ivie Group'],
  ['23', 'Soundscaping Source'],
  ['31', 'Big 6']
]);
console.log(firms);
const entries =[...firms];
console.log(entries);
for (let i = 0; i < entries.length; i++) {
  const [id, name] = entries[i];
  console.log(`${id}, ${name}`);
}

const message = [...firms].reduce((availability, firm) => {
  const [id, name] = firm;
  return availability;
}, '모든 회사를 사용할 수 있습니다.');

console.log(message);

for (const firm of firms) {
  const [id, name] = firm;
  console.log(`${id}, ${name}`);
}

const firms2 = {
  '10': 'Ivie Group',
  '23': 'Soundscaping Source',
  '31': 'Big 6',
};

for (const id in firms2) {
  console.log(id);
}