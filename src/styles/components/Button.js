import styled from "styled-components";

export const PrimaryButton = styled.button`
  align-items: center;
  display: flex;
  background-color: #01a101;
  border-radius: 0.5rem;
  border: 0.1rem outset;
  color: #f0f8ff;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 900;
  height: 2.5rem;
  justify-content: center;
  letter-spacing: 0.15em;
  margin: 1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  transition-duration: 1s;
  transition-property: border-top, border-left, border-bottom, border-right,
    box-shadow;
  width: 7.5rem;

  &:hover {
    box-shadow: #01a101 0.25rem 0.25rem, #01a101aa 0.5rem 0.5rem,
      #01a10155 0.75rem 0.75rem;
  }
`;
