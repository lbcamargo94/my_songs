// imports React
import React from "react";

// imports Styles
import { MenuContent, MenuLink } from "../styles/components/MenuBar";

export default function MenuBar() {
  return (
    <MenuContent>
      <MenuLink>Search</MenuLink>
      <MenuLink>Favorite</MenuLink>
      <MenuLink>Profile</MenuLink>
    </MenuContent>
  );
}
