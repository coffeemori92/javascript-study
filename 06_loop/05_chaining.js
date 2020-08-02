const sailors = [{
  name: 'Yi hong',
  active: true,
  email: 'yh@gmail.com',
}, {
  name: 'alex',
  active: true,
  email: '',
}, {
  name: 'nathan',
  active: false,
  email: '',
}];

const active = sailors.filter(v => v.active);
console.log(active);

const emails = active.map(v => v.email || `${v.name}@AAA.com`);
console.log(emails);

const A = sailors
    .filter(v => v.active)
    .map(v => v.email || `${v.name}@AAA.com`);
console.log(A);