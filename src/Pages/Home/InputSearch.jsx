import React from "react";
import './inputSearch.css'

const InputSearch = (props) => {
  const { inputSearchValue, setInputSearchValue } = props;
  return (
    <input
      type="search"
      placeholder="🔍 Search Products..."
      value={inputSearchValue}
      onChange={(e) => setInputSearchValue(e.target.value)}
      className="input-search"
    />
  );
};

export default InputSearch;
