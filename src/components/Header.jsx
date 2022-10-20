// imports react
import React from "react";
import Avatar from "./Avatar";

// imports componentes
import Logo from "./Logo";
import MenuBar from "./MenuBar";

export default function Header() {
  return (
    <section>
      <div>
        <Logo />
        <Avatar />
      </div>
      <div>
        <MenuBar />
      </div>
    </section>
  );
}
