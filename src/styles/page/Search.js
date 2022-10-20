import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 1200px;
  padding: 0 1rem;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const MusicBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #ffffff30;
  border-radius: 0.5rem;
  border: none;
  max-width: 1200px;
  padding: 1rem;
  width: 100%;
`;

export const TextAlert = styled.span`
  color: #242124;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 900;
`;
