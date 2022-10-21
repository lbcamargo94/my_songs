import styled from "styled-components";

export const ContainerCard = styled.section`
  align-items: center;
  background-color: #ffffff30;
  border-radius: 0.5rem;
  border: 1px solid #ffffff2e;
  box-shadow: 0 0.5rem 0.5rem #000000;
  display: flex;
  flex-direction: column;
  height: 13.125rem;
  justify-content: center;
  margin: 0.5rem 0.25rem;
  padding: 0.25rem;
  width: 20rem;
`;

export const BoxAlbum = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

export const AlbumTitle = styled.h1`
  color: #242124;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
  text-overflow: ellipsis;
`;

export const AlbumImage = styled.img`
  border-radius: 0.5rem;
  border: outset;
  box-shadow: 0 4px 8px 0 #242124;
  height: 3rem;
  margin-right: 1rem;
  margin: 0.25rem;
  transition: 0.3s;
  width: 3rem;
`;

export const BoxArtist = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

export const ArtistTitle = styled.div`
  color: #242124;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
  text-overflow: ellipsis;
`;

export const ArtistName = styled.h1`
  color: #242124;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
  text-overflow: ellipsis;
`;

export const ArtistId = styled.h1`
  color: #242124;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
  text-overflow: ellipsis;
`;

export const ArtistImage = styled.img`
  border-radius: 0.5rem;
  border: outset;
  box-shadow: 0 4px 8px 0 #242124;
  height: 3rem;
  margin-right: 1rem;
  margin: 0.25rem;
  transition: 0.3s;
  width: 3rem;
`;

export const BoxMusic = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MusicName = styled.h1`
  color: #242124;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
  margin: 0.25rem;
  text-overflow: ellipsis;
`;

export const MusicPlayer = styled.audio`
  background-color: #242124;
  border-radius: 0.5rem;
  color: #f0f8ff;
  max-width: 35rem;
  padding: 0.125rem;
`;

export const MusicTrack = styled.track`
  background-color: #242124;
  border-radius: 0.25rem;
  color: #242124;
  color: #f0f8ff;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
  max-width: 35rem;
`;
