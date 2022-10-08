import React from "react";
import { useNavigate } from "react-router-dom";

// import image
import HeadPhonePink from "../assets/images/head-phone-01.jpg";
import HeadPhoneBlue from "../assets/images/head-phone-02.jpg";
import HeadPhoneYellow from "../assets/images/head-phone-03.jpg";
import HeadPhoneGreen from "../assets/images/head-phone-04.jpg";

// impport component
import Logo from "../components/Logo";

// import Styled Components
import {
  Container,
  BoxImage,
  BoxIntro,
  TextIntro,
  BoxButtons,
  Button,
  HomeImage,
} from "../styles/StyledHomePage";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo />
      <BoxImage>
        <HomeImage src={HeadPhonePink} alt="HeadPhonePink" />
        <HomeImage src={HeadPhoneBlue} alt="HeadPhoneBlue" />
        <HomeImage src={HeadPhoneYellow} alt="HeadPhoneYellow" />
        <HomeImage src={HeadPhoneGreen} alt="HeadPhoneGreen" />
      </BoxImage>
      <BoxIntro>
        <TextIntro>
          My Songs, an application capable of playing songs from the most varied
          bands and artists, creating a list of favorite songs and editing the
          profile of the user logged in.
        </TextIntro>
      </BoxIntro>
      <BoxButtons>
        <Button onClick={() => navigate("/login")}>Sign In</Button>
        <Button onClick={() => navigate("/register")}>Sign Up</Button>
      </BoxButtons>
    </Container>
  );
}
