const landscape = {
  title: 'Landscape',
  photographer: 'Nathan',
  equipment: 'Canon',
  format: 'digital',
  src: '/andscape-nm.jpg',
  location: [32.7122222, -103.1405556]
};

const landscape2 = {
  photographer: 'Nathan',
  equipment: 'Canon',
  format: 'digital',
};

const { photographer, ...additional } = landscape2

console.log(photographer);
console.log(additional);
 
const { location } = landscape;
const [latitude, longitude] = location;
console.log(latitude);
console.log(longitude);

const { location: [latitude2, longitude2] } = landscape;
console.log(latitude2);
console.log(longitude2);

function displayPhoto(photo) {
  const {
    title,
    photographer = 'Anonymous',
    location: [latitude, longitude],
    src: url,
    ...others
  } = photo;
  const additional = Object.keys(others).map(v => `${v}: ${others[v]}`);
  return `
    <img alt="${title} 사진 ${photographer} 촬영" src="${url}" />
    <div>${title}</div>
    <div>${photographer}</div>
    <div>위도: ${latitude}</div>
    <div>경도: ${longitude}</div>
    <div>${additional.join('<br/>')}</div>
  `;
}
console.log(displayPhoto(landscape));

function displayPhoto2({
  title,
  photographer = 'Anonymous',
  location: [latitude, longitude],
  src: url,
  ...others
}) {
  const additional = Object.keys(others).map(v => `${v}: ${others[v]}`);
  return `
    <img alt="${title} 사진 ${photographer} 촬영" src="${url}" />
    <div>${title}</div>
    <div>${photographer}</div>
    <div>위도: ${latitude}</div>
    <div>경도: ${longitude}</div>
    <div>${additional.join('<br/>')}</div>
  `;
}