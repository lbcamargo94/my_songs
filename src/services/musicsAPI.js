const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a9b41b7ff4msh864119f7cd6d9b0p198114jsnb461e9639f87",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

// search?q=querry
// artist/id
// playlist/id
// track/id
// album/id

export const getSearchAPI = (search, input) => {
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/${search}${input}`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
