import styled from "styled-components";

export const MenuContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

export const MenuLink = styled.a`
  align-items: center;
  background-color: #01a101;
  border: 0.1rem outset;
  color: #f0f8ff;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 900;
  height: 2.5rem;
  justify-content: center;
  letter-spacing: 0.15em;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: all 0.5s;
  width: 100%;
  cursor: pointer;
  &:hover {
    -webkit-transform: scale(1.0125);
    transform: scale(1.0125);
    border: 1px solid #01a101;
  }
  :active {
    transform: translateY(0.5rem);
  }
  :nth-child(1) {
    border-radius: 0.5rem 0 0 0.5rem;
  }
  :nth-child(3) {
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;
