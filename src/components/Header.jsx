// imports react
import React from "react";

// imports styles
import { Box, Container } from "../styles/components/Header";

// imports componentes
import Avatar from "./Avatar";
import Logo from "./Logo";
import MenuBar from "./MenuBar";

export default function Header() {
  return (
    <Container>
      <Box>
        <Logo />
        <Avatar />
      </Box>
      <Box>
        <MenuBar />
      </Box>
    </Container>
  );
}
