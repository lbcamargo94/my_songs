import styled from "styled-components";

export const Content = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 640px;
  padding: 3rem;
  width: 360px;
`;

export const Text = styled.span`
  color: ${(props) => (props.textColor === "red" ? "#e32636" : "#f0f8ff")};
  margin: 1rem;
  text-align: center;
`;

export const Link = styled.a`
  margin: 1rem;
`;
