import React from "react";

// import styled component
import { Box, TextPrimary } from "../styles/components/Logo";

export default function Logo() {
  return (
    <Box>
      <TextPrimary primaryColor="green">My</TextPrimary>
      <TextPrimary primaryColor="white">Songs</TextPrimary>
    </Box>
  );
}
