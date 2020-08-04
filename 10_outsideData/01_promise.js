function getUserPreferences(cb) {
  return setTimeout(() => {
    cb({ theme: 'dusk' });
  }, 1000);
}

function log(value) {
  return console.log(value);
}

log('starting');
getUserPreferences(preferences => log(preferences.theme.toUpperCase()));
log('ending?');

function getMusic(theme, cb) {
  return setTimeout(() => {
    if (theme === 'dusk') {
      return cb({ album: 'music for airports' });
    }
    return cb({ album: 'kind of blue' });
  }, 1000);
}
getUserPreferences(preferences => {
  return getMusic(preferences.theme, music => {
    console.log(music.album);
  });
});

function getUserPreferences2() {
  const preferences = new Promise((resolve, reject) => {
    resolve({
      theme: 'dusk'
    });
  });
  return preferences;
}

getUserPreferences2()
  .then(preferences => {
    console.log(preferences.theme);
  });

function failUserPreference() {
  const finder = new Promise((resolve, reject) => {
    reject({
      type: '접근 거부됨',
    });
  });
  return finder;
}

failUserPreference()
  .then(preferences => {
    console.log(preferences.theme);
  })
  .catch(error => {
    console.error(`실패: ${error.type}`);
  });

function getMusic2(theme) {
  if (theme == 'dusk') {
    return Promise.resolve({
      album: 'music for airports'
    });
  }
  return Promise.resolve({
    album: 'kind of blue'
  });
}

getUserPreferences2()
  .then(preferences => {
    return getMusic2(preferences.theme);
  })
  .then(music => {
    console.log(music.album);
  });