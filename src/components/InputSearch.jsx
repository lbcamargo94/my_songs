// imports react
import React from "react";

// imports proptypes
import { PropTypes } from "prop-types";

// imports components
import {
  ButtonSearch,
  Input,
  InputGroup,
} from "../styles/components/InputSearch";

export default function InputSearch(props) {
  // props
  const {
    inputType,
    inputName,
    inputOnChange,
    inputPlaceholder,
    buttonOnClick,
    buttonType,
  } = props;

  return (
    <InputGroup>
      <Input
        required
        ype={inputType}
        name={inputName}
        onChange={inputOnChange}
        placeholder={inputPlaceholder}
      />
      <ButtonSearch type={buttonType} onClick={buttonOnClick}>
        Search
      </ButtonSearch>
    </InputGroup>
  );
}

InputSearch.propTypes = {
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputOnChange: PropTypes.func,
  buttonType: PropTypes.string,
  buttonOnClick: PropTypes.func,
}.isRequired;
