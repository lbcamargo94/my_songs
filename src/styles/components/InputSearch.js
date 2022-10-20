import styled from "styled-components";

export const InputGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 3rem auto;
  width: 100%;
`;

export const Input = styled.input`
  background: none;
  border-radius: 0.5rem 0 0 0.5rem;
  border: solid 1.5px #f5f5f5;
  color: #f5f5f5;
  font-size: 1rem;
  outline: none;
  padding: 1rem;
  width: 80%;
  height: 3rem;
`;

export const ButtonSearch = styled.button`
  border-radius: 0 0.5rem 0.5rem 0;
  border: 1.5px solid #f5f5f5;
  color: #f5f5f5;
  background-color: #01a101;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 900;
  padding: 0.5rem;
  height: 3rem;
  cursor: pointer;
  &:hover {
    color: #01a101;
    background-color: #f5f5f5;
  }
  :active {
    transform: translateY(0.125rem);
  }
`;
