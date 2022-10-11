import React from "react";

// impport component
import Logo from "../components/Logo";
import FormsRegister from "../components/FormsRegister";

// import styled component
import { Content } from "../styles/page/Register";
import Title from "../components/Title";

export default function Register() {
  return (
    <Content>
      <Logo />
      <Title titleText="Sign Up" />
      <FormsRegister />
    </Content>
  );
}
