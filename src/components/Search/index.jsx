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

// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

// class Search extends Component  {

//   state = {
//     toSearch: ''
//   }

//   handleChange = e => {
//     console.log('handleChange: ', e.target.value );
//     this.setState({ toSearch: e.target.value })
//   }

//   render() { 
//     const { toSearch } = this.state;
//     // console.log('toSearch: ', toSearch);
//     return (
//       <div>
//         <input type="text" name="search" id="search" placeholder="Nunca dejes de buscar" value={toSearch} onChange={this.handleChange} />
//         <NavLink to={`/items?search=${toSearch}`} className="countries-item">
//           {/* <img src={flag} alt=""/> */}
//             <span>Search</span>
//         </NavLink>
//       </div>
//     )
//   }
// }

// export default Search;