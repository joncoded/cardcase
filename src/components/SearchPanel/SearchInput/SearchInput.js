import React from 'react';

const SearchInput = ({ input: keyword, onChange: setKeyword }) => {
  return (
    <input 
      key="searchInput"
      value={keyword}
      placeholder={"Search"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  ) 
}

export default SearchInput;