import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-height: 900px;
  max-width: 600px;
  width: 100%;
`;

export const BoxImage = styled.div`
  align-items: center;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
  width: 80%;

  img {
    max-width: 50%;
  }
`;

export const BoxIntro = styled.div`
  align-items: center;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-betwen;
  margin-top: 3rem;
  margin: 1rem;
  max-width: 80%;
  min-height: 200px;
  padding: 2rem;
`;

export const TextIntro = styled.p`
  font-family: "Oxygen", sans-serif;
  font-size: 1.5rem;
  height: 100%;
`;

export const BoxButtons = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const Button = styled.button`
  background-color: #01a101;
  border-radius: 0.5rem;
  border: 0.1rem outset;
  color: #f0f8ff;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 900;
  height: 3rem;
  letter-spacing: 0.15em;
  margin: 1rem;
  padding: 0.5rem 1rem;
  transition-duration: 1s;
  transition-property: border-top, border-left, border-bottom, border-right, box-shadow;
  width: 7.5rem;

  &:hover {
    box-shadow: #01a101 0.25rem 0.25rem, #01a101aa 0.5rem 0.5rem, #01a10155 0.75rem 0.75rem;
  }
`;
