import styled, { keyframes } from "styled-components";

// Sound Bar Animations
const barAnimation1 = keyframes`
	0%,100%{ height: 30px; }
	50%{ height: 80px; }
`;

const barAnimation2 = keyframes`
	0%,100%{ height: 30px; }
	50%{ height: 100px; }
  `;

const barAnimation3 = keyframes`
	0%,100%{ height: 30px; }
	50%{ height: 50px; }
`;

const barAnimation4 = keyframes`
	0%,100%{ height: 30px; }
	50%{ height: 90px; }
  `;

// Letters Animation
const dots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;}
`;

const barAnimation5 = keyframes`
	0%,100%{ height: 30px; }
	50%{ height: 80px; }
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxSoundBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 7.5rem;
  width: 100%;
`;

export const SoundBar = styled.span`
  width: 10px;
  height: 80px;
  margin: 0 3px;
  border-radius: 50px;

  :nth-child(5) {
    background: #fb7afc;
    animation: ${barAnimation1} 0.5s infinite;
  }
  :nth-child(4),
  :nth-child(6) {
    background: #fbc7f7;
    animation: ${barAnimation2} 0.75s infinite;
  }
  :nth-child(3),
  :nth-child(7) {
    background: #bc6ff1;
    animation: ${barAnimation3} 1s infinite;
  }
  :nth-child(2),
  :nth-child(8) {
    background: #892cdc;
    animation: ${barAnimation4} 1.25s infinite;
  }
  :nth-child(1),
  :nth-child(9) {
    background: #52057b;
    animation: ${barAnimation5} 1.5s infinite;
  }
`;

export const BoxLetters = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const Letters = styled.div`
  color: #f5f5f5;
  display: flex;
  font-size: 1rem;
  margin: 1rem;
  ::after {
    content: " .";
    animation: ${dots} 1s steps(5, end) infinite;
  }
`;
