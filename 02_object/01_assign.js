const defaults = {
  author: '',
  title: '',
  year: 2020,
  rating: null,
};

const book = {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript',
};

const anotherBook = {
  title: 'Another book',
  year: 2021,
};

function addBookDefaults(book, defaults) {
  const fields = Object.keys(defaults);
  console.log('fields', fields);
  const updated = {};
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    updated[field] = book[field] || defaults[field];
  }
  return updated;
}

console.log('addBookDefautls', addBookDefaults(book, defaults));
console.log('Object.assign', Object.assign({}, defaults, book));

const defaultsEmployee = {
  name: {
    first: '',
    last: '',
  },
  year: 0,
};

const employee = Object.assign({}, defaultsEmployee, {
  name: Object.assign({}, defaultsEmployee.name)
});

console.log('employee', employee);