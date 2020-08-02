const team = [{
  name: 'melinda',
  position: 'ux designer',
}, {
  name: 'katie',
  position: 'strategist',
}, {
  name: 'madhavi',
  position: 'developer',
}, {
  name: 'justin',
  position: 'manager',
}, {
  name: 'chris',
  position: 'developer',
}];

const prices = ['1.0', '홍길동', '2.15'];
const formattedPrices = prices.map(price => parseFloat(price)).filter(price => price);
console.log(formattedPrices);

const band = [{
  name: 'corbett',
  instrument: 'guiter',
}, {
  name: 'evan',
  instrument: 'guiter',
}, {
  name: 'sean',
  instrument: 'bass',
}, {
  name: 'brett',
  instrument: 'drums',
}];

const instruments = [];
for (let i = 0; i < band.length; i++) {
  const instrument = band[i].instrument;
  instruments.push(instrument);
}

console.log(instruments);

function getInstrument(member) {
  return member.instrument;
}

const instruments2 = [];
for (let i = 0; i < band.length; i++) {
  instruments2.push(getInstrument(band[i]));
}

console.log(instruments2);

const instruments3 = band.map(v => v.instrument);
console.log(instruments3);