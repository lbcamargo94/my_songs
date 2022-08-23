import React from 'react';

// import styled component
import { Box, TextPrimary } from '../styles/StyledLogo';


export default function Logo() {
  return (
    <Box>
      <TextPrimary primaryColor='green'>
        Trybe
      </TextPrimary>

      <TextPrimary primaryColor='white'>
        Tunes
      </TextPrimary>
    </Box>
  );
}
