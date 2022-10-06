import styled from "styled-components";

export const Box = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const TextPrimary = styled.h1`
  /* checge text color whit styled-component props */
  color: ${(props) => (props.primaryColor === "green" ? "#4DE649" : "#f0f8ff")};
  font-family: "Fascinate Inline", cursive;
  font-size: 2.5rem;
  filter: brightness(1);
`;
