import React, {
  useState,
  useEffect,
} from 'react';

// import react-router-dom
import { useNavigate } from 'react-router-dom';

// Import forms validation
import {
  emailValidation,
  passwordValidation,
  nameValidation,
} from '../helpers/validationRegisterForms';

// import styled component
import { Content } from '../styles/StyledFormsRegister';

export default function FormsRegister() {
  // States
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validForms, setValidForms] = useState(false);

  // React Router Dom useNavigate
  let navigate = useNavigate();

  return (
    <Content>
      
    </Content>
  );
}
