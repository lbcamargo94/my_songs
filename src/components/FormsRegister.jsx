import React, { useState } from "react";

// import context/provider
import { useNavigate } from "react-router-dom";
import { useUpdateContext } from "../utils/provider";

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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [validForms, setValidForms] = useState(false);

  // React Touter Dom useNavigate
  const navigate = useNavigate();

  // Save newUser in Context
  const { data, setData } = useUpdateContext();

  // Function to add a new user
  const addNewUser = (firstName, lastName, email, password) => {
    const newUser = { firstName, lastName, email, password };
    const userExists = data.some((user) => user.email === email);
    if (userExists) {
      return setAlertMessage("E-mail já cadastrado, informe um e-mail valido!");
    }
    setData([...data, newUser]);
    return navigate("/login");
  };

  // Function to validate form fields
  const handleValidations = (firstName, password, email) => {
    const isValidName = nameValidation(firstName);
    if (!isValidName) {
      setAlertMessage("O campo nome deve ter entre 3 e 12 caracteres");
    }
    const isValidPassword = passwordValidation(password);
    if (!isValidPassword) {
      setAlertMessage("O campo password deve ter entre 6 e 12 caracteres");
    }
    const isValidEmail = emailValidation(email);
    if (!isValidEmail) {
      setAlertMessage(
        "O campo email deve atender o padrão de exemplo email@gamil.com",
      );
    }
    const arrValidation = [isValidName, isValidPassword, isValidEmail];
    return arrValidation.every((el) => el === true);
  };

  // Function to check if everything is ok and redirect to the login page
  const handleSubmit = () => {
    const validSubmit = handleValidations(firstName, password, email);
    if (validSubmit) {
      return addNewUser(firstName, lastName, email, password);
    }
    return setValidForms(validSubmit);
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
        <FormsLabel>First Name *</FormsLabel>
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
        <FormsLabel>Email addres *</FormsLabel>
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
        <FormsLabel>Password *</FormsLabel>
      </InputGroup>
      {!validForms && <span> {alertMessage} </span>}
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
