import React from 'react';
import styled from 'styled-components';

// import image
import HeadPhonePink from '../assets/images/head-phone-01.jpg';
import HeadPhoneBlue from '../assets/images/head-phone-02.jpg';
import HeadPhoneYellow from '../assets/images/head-phone-03.jpg';
import HeadPhoneGreen from '../assets/images/head-phone-04.jpg';

export default function Home() {
  return (
    <Home>
      <Box>
        <img className="" src={HeadPhonePink} alt="HeadPhonePink" />
        <img className="" src={HeadPhoneBlue} alt="HeadPhoneBlue" />
        <img className="" src={HeadPhoneYellow} alt="HeadPhoneYellow" />
        <img className="" src={HeadPhoneGreen} alt="HeadPhoneGreen" />
      </Box>
      <Box>

      </Box>
    </Home>
  );
}

const Home = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`
const Box = styled.div`
  align-itens: center;
  border-radios: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem;

  img {
    max-width: 25%
  }
`
