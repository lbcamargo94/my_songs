import React from "react";
import FormsLogin from "../components/FormsLogin";
import Logo from "../components/Logo";
import Title from "../components/Title";
import { Container } from "../styles/page/Login";

export default function Login() {
  return (
    <Container>
      <Logo />
      <Title titleText="Sign In" />
      <FormsLogin />
    </Container>
  );
}
