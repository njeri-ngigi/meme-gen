import React from 'react';
import { MdSearch } from 'react-icons/md';

const navbar = () => (
  <div className="navbar">
    <span className="logo">M<u>eeeme</u>G<u>en</u></span>
    <span className="search">
      <input placeholder="Search"/>
      <MdSearch className="search-icon"/>
    </span>
  </div>
)

navbar.displayName = 'navbar';

export default navbar;
