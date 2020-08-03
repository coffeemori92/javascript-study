const landscape = {
  title: 'Landscape',
  photographer: 'Nathan',
  equipment: 'Canon',
  format: 'digital',
  src: '/andscape-nm.jpg',
  location: [32.7122222, -103.1405556]
};
const region = {
  city: 'Hobbs',
  county: 'Lea',
  state: {
    name: 'New Mexico',
    abbreviation: 'NM'
  }
};

function getCityAndState({ location }) {
  const { city, state } = determinecityAndState(location);
  return {
    city,
    state: state.abbreviation
  };
}

function setRegion({ location, ...details }) {
  const { city, state } = determinecityAndState(location);
  return {
    city,
    state: state.abbreviation,
    ...details,
  };
}

function validateCharCount(max, items) {
  return items.every(item => item.length < max);
}

console.log(validateCharCount(10, ['Hobbs', 'Eagles']));

function getArguments() {
  return arguments;
}

console.log(getArguments('Bloomsday', 'June 16'));

function validateCharCount2(max) {
  const items = [].slice.call(arguments, 1);
  console.log(arguments);
  return items.every(item => item.length < max);
}

console.log(validateCharCount2(10, 'wvoquie'));
const tags = ['Hobbs', 'Eagles'];
console.log(validateCharCount2(10, ...tags));

function getArguments2(...args) {
  return args;
}
console.log(getArguments2('Bloomsday', 'June 16'));

function validateCharCount3(max, ...items) {
  return items.every(item => item.length , max);
}

