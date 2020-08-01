const book = {
  title: 'Reasons and Persons',
  author: 'Derek Parfit',
};

const update = {...book, year: 1984};

console.log(update);

const defaultsEmployee = {
  name: {
    first: '',
    last: '',
  },
  year: 0,
};

const employee = {
  ...defaultsEmployee,
  name: {
    ...defaultsEmployee.name
  },
};

console.log(employee);