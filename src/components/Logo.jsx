import React from 'react';
import styled from 'styled-components';

export default function Logo() {
  return (
    <Box>
      <TextPrimary primary>
        Trybe
      </TextPrimary>

      <TextSecundary >
        Tunes
      </TextSecundary>
    </Box>
  );
}

const Box = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`

const TextPrimary = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Fascinate+Inline&display=swap');
  font-size: 2.5rem;
  font-family: 'Fascinate Inline', cursive;
  color: #4DE649;
  filter: brightness(1);
`

const TextSecundary = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Fascinate+Inline&display=swap');
  font-size: 2.5rem;
  font-family: 'Fascinate Inline', cursive;
  color: #f0f8ff;
`
