const building = {
  hours: '8am - 8pm',
  address: 'Jayhwk Blvd',
};
const manager = {
  name: 'Augusto',
  phone: '555-555-5555',
};
const program = {
  name: 'Presenting Research',
  room: '415',
  hours: '3 - 6',
};
const exhibit = {
  name: 'Emerging Scholarship',
  contact: 'Dyan',
};

function mergeProgramInfo(building, manager, event) {
  const { hours, address } = building;
  const { name, phone } = manager;
  const defaults = {
    hours,
    address,
    contact: name,
    phone
  };
  return { ...defaults, ...event };
}

console.log(mergeProgramInfo(building, manager, program));
console.log(mergeProgramInfo(building, manager, exhibit));

function mergeProgramInfo2(building, manager) {
  const { hours, address } = building;
  const { name, phone } = manager;
  const defaults = {
    hours,
    address,
    contact: name,
    phone,
  };
  return program => {
    return { ...defaults, ...program };
  };
}

console.log(mergeProgramInfo2(building, manager)(exhibit));