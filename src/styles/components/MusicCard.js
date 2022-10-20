import styled from "styled-components";

export const ContainerCard = styled.section`
  align-items: center;
  background-color: #ffffff30;
  border-radius: 0.5rem;
  border: 1px solid #ffffff2e;
  box-shadow: 0 0.5rem 0.5rem #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem 0.25rem;
  padding: 0.25rem;
  width: 20rem;
  height: 13.125rem;
`;

export const BoxAlbum = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const AlbumTitle = styled.h1`
  color: #242124;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
`;

export const AlbumImage = styled.img`
  height: 3rem;
  width: 3rem;
  border: outset;
  border-radius: 0.5rem;
  margin: 0.25rem;
  margin-right: 1rem;
  box-shadow: 0 4px 8px 0 #242124;
  transition: 0.3s;
`;

export const BoxArtist = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const ArtistTitle = styled.div`
  color: #242124;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
`;

export const ArtistName = styled.h1`
  color: #242124;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
`;

export const ArtistId = styled.h1`
  color: #242124;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
`;

export const ArtistImage = styled.img`
  height: 3rem;
  width: 3rem;
  border: outset;
  border-radius: 0.5rem;
  margin: 0.25rem;
  margin-right: 1rem;
  box-shadow: 0 4px 8px 0 #242124;
  transition: 0.3s;
`;

export const BoxMusic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MusicName = styled.h1`
  color: #242124;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
  margin: 0.25rem;
`;

export const MusicPlayer = styled.audio`
  background-color: #242124;
  border-radius: 0.5rem;
  color: #f0f8ff;
  max-width: 35rem;
  padding: 0.125rem;
`;

export const MusicTrack = styled.track`
  color: #242124;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
  background-color: #242124;
  border-radius: 0.25rem;
  color: #f0f8ff;
  max-width: 35rem;
`;
