const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(json => console.log(json));

const update = {
  title: 'Clarence White Techniques',
  body: 'Amazing',
  userId: 1,
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(update),
};

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then(data => {
    if (!data.ok) {
      throw Error(data.status);
    }
    return data.json();
  })
  .then(update => console.log(update))
  .catch(e => console.error(e));
