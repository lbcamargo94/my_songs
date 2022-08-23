import React from 'react';
import styled from 'styled-components';

// import image
import HeadPhonePink from '../assets/images/head-phone-01.jpg';
import HeadPhoneBlue from '../assets/images/head-phone-02.jpg';
import HeadPhoneYellow from '../assets/images/head-phone-03.jpg';
import HeadPhoneGreen from '../assets/images/head-phone-04.jpg';

// impport component
import Logo from '../components/Logo';

export default function Home() {
  return (
    <Stack>
      <Logo />
      <Box>
        <img src={HeadPhonePink} alt="HeadPhonePink" />
        <img src={HeadPhoneBlue} alt="HeadPhoneBlue" />
        <img src={HeadPhoneYellow} alt="HeadPhoneYellow" />
        <img src={HeadPhoneGreen} alt="HeadPhoneGreen" />
      </Box>
      <Box>
        
      </Box>
    </Stack>
  );
}

const Stack = styled.section`
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
