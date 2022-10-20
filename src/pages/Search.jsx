// React Imports
import React, { useState } from "react";

// Components Imports
import Loading from "../components/Loading";
import { Container, MusicBox } from "../styles/page/Search";
import InputSearch from "../components/InputSearch";

// Request API import
import { getSearchAPI } from "../services/musicsAPI";
import Header from "../components/Header";
import MusicCard from "../components/MusicCard";

export default function Search() {
  // States App
  const [inputSearch, setInputSearch] = useState("");
  const [musics, setMusics] = useState("");
  console.log(musics);
  const [loading, setLoading] = useState(false);

  // Request music API
  async function searchMusics(search, query) {
    setLoading(true);
    const result = await getSearchAPI(search, query);
    setMusics(result);
    setLoading(false);
  }

  // Render music cards
  function renderMusicCard(musics) {
    if (!musics && musics === "") {
      return "";
    }
    return musics.data.map((index) => (
      <MusicCard
        key={index.id}
        albumCover={index.album.cover}
        albumTitle={index.album.title}
        artistId={index.artist.id}
        artistName={index.artist.name}
        artistPicture={index.artist.picture}
        musicId={index.id}
        musicPreview={index.preview}
        musicTitle={index.title_short}
      />
    ));
  }

  return (
    <Container>
      <Header />
      <InputSearch
        inputType="text"
        inputName="search"
        inputPlaceholder="Search for an album or a song!"
        inputOnChange={({ target }) => setInputSearch(target.value)}
        buttonType="button"
        buttonOnClick={() => searchMusics("search", inputSearch)}
      />
      <MusicBox>{loading ? <Loading /> : renderMusicCard(musics)}</MusicBox>
    </Container>
  );
}
