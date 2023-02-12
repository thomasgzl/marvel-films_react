const fetchCharacters = async (characterName) => {
  const hash = 'hash=084e7f49e6f61614be236c96d9cc673b';
  const apiKey = 'apikey=7c793ad2ff84ea2d8b68c16675a88f9c';
  const ts = 'ts=1';
  const url = 'http://gateway.marvel.com/v1/public/characters?nameStartsWith=';
  const response = await fetch(
    `${url}${characterName}&${ts}&${apiKey}&${hash}`,
    {
      method: 'get',
      header: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  let results = [];
  if (data && data.data?.results) {
    results = data.data?.results.map((character) => {
      const image = character.thumbnail;
      if (image) {
        return {
          id: character.id,
          name: character.name,
          description: character.description,
          image: `${image.path}.${image.extension}`,
          series: character.series?.items.map((item) => { return item.name }) || ['no series']
        };
      }
    });
  }
  return results;
};

export default fetchCharacters;
