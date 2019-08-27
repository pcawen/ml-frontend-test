import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Search = () => {

  const [ toSearch, setToSearch ] = useState('');

  const handleChange = e => {
    setToSearch(e.target.value);
  }
    
  return (
    <div>
      <input type="text" name="search" id="search" placeholder="Nunca dejes de buscar" value={toSearch} onChange={handleChange} />
      <NavLink to={`/items?search=${toSearch}`} className="countries-item">
        {/* <img src={flag} alt=""/> */}
          <span>Search</span>
      </NavLink>
    </div>
  )
}

export default Search;