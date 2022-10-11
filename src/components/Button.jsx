import React from "react";
import { PropTypes } from "prop-types";
import { PrimaryButton } from "../styles/Button";

export default function Button(props) {
  const { buttonType, buttonText, buttonOnClick } = props;

  return (
    <PrimaryButton type={buttonType} onClick={buttonOnClick}>
      {buttonText}
    </PrimaryButton>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
  buttonOnClick: PropTypes.func,
}.isRequired;
