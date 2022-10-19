import React from "react";
import {
  BoxLetters,
  BoxSoundBar,
  Content,
  Letters,
  SoundBar,
} from "../styles/components/Loading";

export default function Loading() {
  return (
    <Content>
      <BoxSoundBar>
        <SoundBar />
        <SoundBar />
        <SoundBar />
        <SoundBar />
        <SoundBar />
        <SoundBar />
        <SoundBar />
        <SoundBar />
        <SoundBar />
      </BoxSoundBar>
      <BoxLetters>
        <Letters>LOADING</Letters>
      </BoxLetters>
    </Content>
  );
}
