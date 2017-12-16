import React from 'react';
import { NavLink } from 'react-router-dom';
// activeClassName="myCustomActiveClass"
//
const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink to="/LSE">LSE</NavLink></li>
      <li><NavLink to="/PAYS">PAYS</NavLink></li>
      <li><NavLink to="/ARS">ARS</NavLink></li>
      <li><NavLink to="/BOOM">BOOM</NavLink></li>
    </ul>
  </header>
);

export default Header;
