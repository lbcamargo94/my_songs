import styled from "styled-components";

export const Text = styled.span`
  color: ${(props) => (props.textColor === "red" ? "#e32636" : "#f0f8ff")};
  margin: 1rem;
  text-align: center;
`;
