import React, { useState } from "react";

// import react-router-dom
import { useNavigate } from "react-router-dom";

// import context/provider
import { useUpdateContext } from "../utils/provider";

// import Component
import Button from "./Button";
import Input from "./Input";

// import Styled-Component
import { Link } from "../styles/components/FormsRegister";
import { Text } from "../styles/components/Text";
import { Content } from "../styles/components/FormsLogin";

export default function FormsLogin() {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [validForms, setValidForms] = useState(false);

  // React Router Dom useNavigate
  const navigate = useNavigate();

  // Save newUser in Context
  const { data } = useUpdateContext();

  // Function to validate form fields
  const handleValidations = (password, email) => {
    const isValidEmail = data.some((user) => user.email === email);
    const isValidPassword = data.some((user) => user.password === password);
    const message = "Invalid password or email.";
    if (!isValidPassword || !isValidEmail) {
      setAlertMessage(message);
    }
    const arrValidation = [isValidPassword, isValidEmail];
    return arrValidation.every((el) => el === true);
  };

  // Function to check if everything is ok and redirect to the seacrh page
  const handleSubmit = () => {
    const validSubmit = handleValidations(password, email);
    if (validSubmit) {
      return navigate("/search");
    }
    return setValidForms(validSubmit);
  };

  return (
    <Content>
      {/* input Email addres */}
      <Input
        inputType="email"
        inputName="user_email"
        inputAutocomplete="off"
        inputOnChange={({ target }) => setEmail(target.value)}
        textLabel="E-mail addres *"
      />
      {/* input Password */}
      <Input
        inputType="password"
        inputName="user_password"
        inputAutocomplete="off"
        inputOnChange={({ target }) => setPassword(target.value)}
        textLabel="Password *"
      />
      {!validForms && <Text textColor="red"> {alertMessage} </Text>}
      {/* button Sign Up */}
      <Button
        buttonType="button"
        buttonText="Login"
        buttonOnClick={() => handleSubmit()}
      />
      {/* span */}
      <Text textColor="white">
        Not a user yet?
        {/* link to Login page */}
        <Link onClick={() => navigate("/register")}>Register</Link>
      </Text>
    </Content>
  );
}
