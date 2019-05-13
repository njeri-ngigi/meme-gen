import React from 'react';
import { logoUrl } from '../../utils/constants';
import Categories from './categories';

const sidebar = () => (
  <div className="sidenav">
    <img src={logoUrl} alt="Cute puppa"/>
    <h3>Memes are around us</h3>
    <Categories className="categories"/>
  </div>
)

sidebar.displayName = 'sidebar';

export default sidebar;
