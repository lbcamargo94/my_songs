import React, { useState } from "react";

// import context/provider
import { useNavigate } from "react-router-dom";
import { useUpdateContext } from "../utils/provider";

// import react-router-dom

// Import forms validation
import {
  emailValidation,
  passwordValidation,
  nameValidation,
} from "../helpers/ValidationFormsRegister";

// import styled component
import {
  Button,
  Content,
  FormsInput,
  FormsLabel,
  InputGroup,
  Link,
  Text,
} from "../styles/StyledFormsRegister";

export default function FormsRegister() {
  // States
  // const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [showAlert, setShowAlert] = useState(false);

  // React Touter Dom useNavigate
  const navigate = useNavigate();

  // Save newUser in Context
  const { data, setData } = useUpdateContext();

  const addNewUser = (firstName, lastName, email, password) => {
    const newUser = { firstName, lastName, email, password };
    setData([...data, newUser]);
  };

  const handleValidations = (firstName, password, email) => {
    const isValidName = nameValidation(firstName);
    const isValidPassword = passwordValidation(password);
    const isValidEmail = emailValidation(email);
    const arrValidation = [isValidName, isValidPassword, isValidEmail];
    return arrValidation.every((el) => el === true);
  };

  const handleSubmit = () => {
    const validSubmit = handleValidations(firstName, password, email);
    // eslint-disable-next-line no-console
    console.log("handleSubmit", validSubmit);
    if (validSubmit) {
      addNewUser(firstName, lastName, email, password);
    }
  };

  return (
    <Content>
      {/* input First Name */}
      <InputGroup>
        <FormsInput
          required=""
          type="text"
          name="first_name"
          autocomplete="off"
          onChange={({ target }) => setFirstName(target.value)}
        />
        <FormsLabel>First Name</FormsLabel>
      </InputGroup>
      {/* input Last Name */}
      <InputGroup>
        <FormsInput
          required=""
          ype="text"
          name="last_name"
          autocomplete="off"
          onChange={({ target }) => setLastName(target.value)}
        />
        <FormsLabel>Last Name</FormsLabel>
      </InputGroup>
      {/* input Email addres */}
      <InputGroup>
        <FormsInput
          required=""
          type="email"
          name="email"
          autocomplete="off"
          onChange={({ target }) => setEmail(target.value)}
        />
        <FormsLabel>Email addres</FormsLabel>
      </InputGroup>
      {/* input Password */}
      <InputGroup>
        <FormsInput
          required=""
          type="password"
          name="password"
          autocomplete="off"
          onChange={({ target }) => setPassword(target.value)}
        />
        <FormsLabel>Password</FormsLabel>
      </InputGroup>
      {/* button Sign Up */}
      <Button onClick={() => handleSubmit()}>Sign Up</Button>
      {/* span */}
      <Text>
        Already a user?
        {/* link to Login page */}
        <Link onClick={() => navigate("/login")}>Ligon</Link>
      </Text>
    </Content>
  );
}
