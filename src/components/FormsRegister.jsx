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
      return setAlertMessage(
        "E-mail already registered, enter a valid e-mail!",
      );
    }
    setData([...data, newUser]);
    return navigate("/login");
  };

  // Function to validate form fields
  const handleValidations = (firstName, password, email) => {
    const isValidName = nameValidation(firstName);
    if (!isValidName) {
      setAlertMessage("The name field must be between 3 and 12 characters");
    }
    const isValidPassword = passwordValidation(password);
    if (!isValidPassword) {
      setAlertMessage("The password field must be between 6 and 12 characters");
    }
    const isValidEmail = emailValidation(email);
    if (!isValidEmail) {
      setAlertMessage(
        "The email field must meet the example pattern email@gamil.com",
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
        <FormsLabel>E-mail addres *</FormsLabel>
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
      {!validForms && <Text textColor="red"> {alertMessage} </Text>}
      {/* button Sign Up */}
      <Button onClick={() => handleSubmit()}>Sign Up</Button>
      {/* span */}
      <Text textColor="white">
        Already a user?
        {/* link to Login page */}
        <Link onClick={() => navigate("/login")}>Ligon</Link>
      </Text>
    </Content>
  );
}
