import React from 'react';
import { logoUrl } from './constants';
import Categories from './categories';

const sidebar = () => (
  <div className="sidenav">
    <img src={logoUrl} title="Cute puppa"/>
    <h3>Memes are around us</h3>
    <Categories className="categories"/>
  </div>
)

sidebar.displayName = 'sidebar';

export default sidebar;
