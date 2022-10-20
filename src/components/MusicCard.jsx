// React Imports
import React from "react";

// import PropTypes
import { PropTypes } from "prop-types";

export default function MusicCard(props) {
  const {
    albumCover,
    albumTitle,
    artistId,
    artistName,
    artistPicture,
    musicId,
    musicPreview,
    musicTitle,
  } = props;
  return (
    <section>
      <div>
        <h1>{albumTitle}</h1>
        <img src={albumCover} alt="album_cover" />
      </div>
      <div>
        <div>
          <h1>{artistName}</h1>
          <h1>{artistId}</h1>
        </div>
        <img src={artistPicture} alt="artist_picture" />
      </div>
      <div>
        <div>
          <h1>{musicTitle}</h1>
          <h1>{musicId}</h1>
        </div>
        <audio type="audio/mpeg" src={musicPreview} controls preload="auto">
          <track kind="captions" />
        </audio>
        {/* <iframe src={musicPreview} title="music_player" /> */}
      </div>
    </section>
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
