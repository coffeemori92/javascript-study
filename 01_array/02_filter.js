const staff = [{
  name: 'Wesley',
  position: 'musician'
}, {
  name: 'Davis',
  position: 'engineer'
}];

const getMusician = staff => {
  return staff.filter(v => v.position === 'musician');
}

console.log(getMusician(staff));