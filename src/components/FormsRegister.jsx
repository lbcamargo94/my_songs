import React, { useState } from "react";

// import context/provider
import { useNavigate } from "react-router-dom";

// Import forms validation
import {
  emailValidation,
  passwordValidation,
  nameValidation,
} from "../helpers/ValidationFormsRegister";

// import styled component
import Input from "./Input";
import { Content, Link, Text } from "../styles/StyledFormsRegister";
import { useUpdateContext } from "../utils/provider";
import Button from "./Button";

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
      <Input
        inputType="text"
        inputName="last_name"
        inputAutocomplete="off"
        inputOnChange={({ target }) => setFirstName(target.value)}
        textLabel="First Name *"
      />
      {/* input Last Name */}
      <Input
        inputType="text"
        inputName="last_name"
        inputAutocomplete="off"
        inputOnChange={({ target }) => setLastName(target.value)}
        textLabel="Last Name"
      />
      {/* input Email addres */}
      <Input
        inputType="email"
        inputName="email"
        inputAutocomplete="off"
        inputOnChange={({ target }) => setEmail(target.value)}
        textLabel="E-mail addres *"
      />
      {/* input Password */}
      <Input
        inputType="password"
        inputName="password"
        inputAutocomplete="off"
        inputOnChange={({ target }) => setPassword(target.value)}
        textLabel="Password *"
      />
      {!validForms && <Text textColor="red"> {alertMessage} </Text>}
      {/* button Sign Up */}
      <Button
        buttonType="button"
        buttonText="Sign Up"
        buttonOnClick={() => handleSubmit()}
      />
      {/* span */}
      <Text textColor="white">
        Already a user?
        {/* link to Login page */}
        <Link onClick={() => navigate("/login")}>Ligon</Link>
      </Text>
    </Content>
  );
}
