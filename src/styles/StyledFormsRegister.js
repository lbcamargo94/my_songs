import styled from "styled-components";

export const Content = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 640px;
  padding: 3rem;
  width: 360px;
`

export const InputGroup = styled.div`
  position: relative;
`

export const FormsInput = styled.input`
  background: none;
  border-radius: 0.5rem;
  border: solid 1.5px #f0f8ff;
  color: #f0f8ff;
  font-size: 1rem;
  margin: 1rem;
  padding: 1rem;

  &:focus, &:valid {
    border: 1.5px solid #f0f8ff;
    outline: none;
  }

  &:focus ~ label, &:valid ~ label {
    background-color: #1a202c;
    color: #4DE649;
    padding: 0.5rem;
    margin: 1rem;
    border-radius: 0.5rem;
    transform: translateY(-50%) translateX(-15%) scale(0.8);
    border: 1.5px solid #f0f8ff;
  }
`

export const FormsLabel = styled.label`
  color: #f0f8ff;
  left: 15px;
  position: absolute;
`

export const Button = styled.button`
  align-items: center;
  display: flex;
  background-color: #4DE649;
  border-radius: 0.5rem;
  border: 0.1rem outset;
  color: #1a202c;
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  font-weight: 900;
  height: 2.5rem;
  letter-spacing: 0.15em;
  margin: 1rem;
  padding: 0.5rem 1rem;
  transition-duration: 1s;
  transition-property: border-top, border-left, border-bottom, border-right, box-shadow;
  width: 7.5rem;
  
  &:hover {
    box-shadow: #01a101 0.25rem 0.25rem, #01a101aa 0.5rem 0.5rem, #01a10155 0.75rem 0.75rem;
  }
`
export const Text = styled.span`
  margin: 1rem;
`

export const Link = styled.a`
  margin: 1rem;
`
