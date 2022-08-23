import React from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// impport component
import Logo from '../components/Logo';

export default function Register() {
  return (
    <Content>
      <Logo />
    </Content>
  );
}

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 0;
  width: 360px;
  max-width: 640px;
`
