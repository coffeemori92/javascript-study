const team = [
  'Michelle B',
  'Dave L',
  'Dave C',
  'Courtney B',
  'Davina M'
];

const daves = [];
for (let i = 0; i < team.length; i++) {
  if (team[i].match(/Dav/)) {
    daves.push(team[i])
  }
}

console.log(daves);

const daves2 = team.filter(v => v.match(/Dav/));
console.log(daves2);

const instructors = [{
  name: 'Jim',
  libraries: ['미디어교육정보 도서관'],
}, {
  name: '새라',
  libraries: ['기념 도서관', '문헌정보학 도서관'],
}, {
  name: '엘리엇',
  libraries: ['중앙 도서관']
}];

const librarian = instructors.find(v => {
  return v.libraries.includes('기념 도서관');
});
console.log(librarian);

const images = [{
  path: './me.jpg',
  profile: false,
}];

const profile = images.find(v => v.profile) || {
  path: './default.jpg'
};

console.log(profile);

const findByLibrary = library => instructor => {
  return instructor.libraries.includes(library);
};

const librarian2 = instructors.find(findByLibrary('미디어교육정보 도서관'));

console.log(librarian2);
