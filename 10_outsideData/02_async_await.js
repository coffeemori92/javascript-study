async function getArtistByPreference() {
  const { theme } = await getUserPreferences();
  const { album } = await failMusic(theme);
  const { artist } = await getArtist(album);
  return artist;
}

getArtistByPreference()
  .then(artist => console.log(artist))
  .catch(error => console.error(error));