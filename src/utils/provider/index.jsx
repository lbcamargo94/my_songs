import React, { useMemo, useContext, useState } from "react";
import PropTypes from "prop-types";
import TunesContext from "../context";

export function TunesProvider({ children }) {
  const [data, setData] = useState([]);

  const value = useMemo(
    () => ({
      data,
      setData,
    }),
    [data],
  );

  return (
    <TunesContext.Provider value={value}>{children}</TunesContext.Provider>
  );
}

export const useUpdateContext = () => useContext(TunesContext);

TunesProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
