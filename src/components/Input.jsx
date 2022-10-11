import React from "react";
import { PropTypes } from "prop-types";
import { FormsInput, FormsLabel, InputGroup } from "../styles/components/Input";

export default function Input(props) {
  const { inputType, inputName, inputAutocomplete, inputOnChange, textLabel } =
    props;
  return (
    <InputGroup>
      <FormsInput
        required
        ype={inputType}
        name={inputName}
        autocomplete={inputAutocomplete}
        onChange={inputOnChange}
      />
      <FormsLabel>{textLabel}</FormsLabel>
    </InputGroup>
  );
}

Input.propTypes = {
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputAutocomplete: PropTypes.string,
  inputOnChange: PropTypes.func,
  textLabel: PropTypes.string,
}.isRequired;
