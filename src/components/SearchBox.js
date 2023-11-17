import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className='pa3 ba b--green'
        type='search'
        placeholder='Search States'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;