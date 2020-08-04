const name = {
  first: 'Lemmy',
  last: 'Kilmister',
};

function getName({ first, last }) {
  return `${first} ${last}`;
}

console.log(getName(name));

const comic = {
  first: 'Peter',
  last: 'Bagge',
  city: 'Seattle',
  state: 'Washington',
};

const getName2 = ({ first, last }) => `${first} ${last}`;
console.log(getName2(comic));

const discounter = discount => {
  return price => {
    return price * (1 - discount);
  };
};

const tenPercentOff = discounter(0.1);
console.log(tenPercentOff(100));

const discounter2 = discount => price => price * (1 - discount);
const tenPercentOff2 = discounter2(0.1);
console.log(tenPercentOff2(100));

console.log(discounter2(0.1)(100));