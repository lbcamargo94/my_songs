// React Imports
import React, { useState } from "react";

// Components Imports
import Loading from "../components/Loading";
import { Container } from "../styles/page/Search";
import InputSearch from "../components/InputSearch";

// Request API import
import { getSearchAPI } from "../services/musicsAPI";
import Header from "../components/Header";

export default function Search() {
  // States App
  const [inputSearch, setInputSearch] = useState("");
  const [musics, setMusics] = useState({});
  console.log(musics);
  const [loading, setLoading] = useState(false);

  async function searchMusics(search, query) {
    setLoading(true);
    const result = await getSearchAPI(search, query);
    await setMusics(result);
    setLoading(false);
  }

  return (
    <Container>
      <h1>Search Page</h1>
      <Header />
      <InputSearch
        inputType="text"
        inputName="search"
        inputPlaceholder="Search for an album or a song!"
        inputOnChange={({ target }) => setInputSearch(target.value)}
        buttonType="button"
        buttonOnClick={() => searchMusics("search", inputSearch)}
      />
      {loading ? <Loading /> : ""}
    </Container>
  );
}
