const icon = {
  path: 'acme/bar.png',
};


function getIconPath(icon) {
  const path = icon.path ? icon.path : 'uploads/default.png';
  return `https://assets.foo.com/${path}`;
}

console.log(getIconPath(icon));

function getIconPath2(icon) {
  const path = icon.path || 'uploads/default.png';
  return `https://assets.foo.com/${path}`;
}

console.log(getIconPath2(icon));

const userConfig1 = {};
const userConfig2 = {
  images: [],
};

const userConfig3 = {
  images: [
    'me.png',
    'work.png',
  ],
};

function getImage(userConfig) {
  if (userConfig.images && userConfig.images.length > 0) {
    return userConfig.images[0];
  }
  return 'defaults.png';
}
