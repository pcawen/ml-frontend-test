import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Search = () => {

  const [ toSearch, setToSearch ] = useState('');

  const handleChange = e => {
    setToSearch(e.target.value);
  }
    
  return (
    <div className="searchbox">
      <div className="searchbox__logo">
        <img src="../../../img/Logo_ML.png" alt=""/>
      </div>
      <input type="text" name="search" id="search" placeholder="Nunca dejes de buscar" value={toSearch} onChange={handleChange} />
      <div className="searchbox__button">
        <NavLink to={`/items?search=${toSearch}`}>
          <div>
            <img src="../../../img/ic_Search.png" alt=""/>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Search;