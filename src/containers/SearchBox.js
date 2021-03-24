import React from 'react';
import './SearchBox.css';

const SearchBox=(props)=>{
  const {searchInput}=props;
  return(
    <div>
      <input type="search" name="searchbox" id="searchbox" placeholder="Search your Robots"
      onChange={searchInput}/>
    </div>
  );
}



export default SearchBox;