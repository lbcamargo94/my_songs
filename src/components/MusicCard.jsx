// React Imports
import React from "react";

// import PropTypes
import { PropTypes } from "prop-types";

// import styled
import {
  AlbumImage,
  AlbumTitle,
  ArtistId,
  ArtistImage,
  ArtistName,
  ArtistTitle,
  BoxAlbum,
  BoxArtist,
  BoxMusic,
  ContainerCard,
  MusicName,
  MusicPlayer,
  MusicTrack,
} from "../styles/components/MusicCard";

export default function MusicCard(props) {
  const {
    albumCover,
    albumTitle,
    artistId,
    artistName,
    artistPicture,
    musicPreview,
    musicTitle,
  } = props;

  return (
    <ContainerCard>
      <BoxAlbum>
        <AlbumImage src={albumCover} alt="album_cover" />
        <AlbumTitle>{`Album Title: ${albumTitle}`}</AlbumTitle>
      </BoxAlbum>
      <BoxArtist>
        <ArtistImage src={artistPicture} alt="artist_picture" />
        <ArtistTitle>
          <ArtistId>{`Artist Id: ${artistId}`}</ArtistId>
          <ArtistName>{`Artist Name: ${artistName}`}</ArtistName>
        </ArtistTitle>
      </BoxArtist>
      <BoxMusic>
        <MusicName>{`Music Title: ${musicTitle}`}</MusicName>
        <MusicPlayer
          type="audio/mpeg"
          src={musicPreview}
          controls
          preload="auto"
        >
          <MusicTrack kind="captions" />
        </MusicPlayer>
      </BoxMusic>
    </ContainerCard>
  );
}

MusicCard.propTypes = {
  albumCover: PropTypes.string,
  albumTitle: PropTypes.string,
  artistId: PropTypes.string,
  artistName: PropTypes.string,
  artistPicture: PropTypes.string,
  musicId: PropTypes.string,
  musicPreview: PropTypes.string,
  musicTitle: PropTypes.string,
}.isRequired;
