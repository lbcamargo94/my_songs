import React from "react";
import { PropTypes } from "prop-types";
import { PrimaryTitle } from "../styles/components/Title";

export default function Title(props) {
  const { titleText } = props;
  return <PrimaryTitle>{titleText}</PrimaryTitle>;
}

Title.propTypes = {
  titleText: PropTypes.string,
}.isRequired;
