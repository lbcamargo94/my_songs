import axios from "axios";

export const api = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
});

export const generateOptions = (query, params) => {
  const options = {
    method: "GET",
    url: `https://deezerdevs-deezer.p.rapidapi.com/${query}`,
    params: { q: `${params}` },
    headers: {
      "X-RapidAPI-Key": "197ec024c2msh454e9cb4324e70bp1aa8bejsn5bcb4a2857e9",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  return options;
};

// search   >>  querry
// artist   >>  id
// playlist >>  id
// track    >>  id
// album    >>  id

export const getSearchAPI = async (query, params) => {
  const options = generateOptions(query, params);
  const result = await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => console.error(error));
  return result;
};
