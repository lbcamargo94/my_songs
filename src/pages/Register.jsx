import React from "react";

// impport component
import Logo from "../components/Logo";
import FormsRegister from "../components/FormsRegister";

// import styled component
import { Content } from "../styles/StyledRegister";

export default function Register() {
  return (
    <Content>
      <Logo />
      <FormsRegister />
    </Content>
  );
}
