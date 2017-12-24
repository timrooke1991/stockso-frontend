import React from 'react';
import { NavLink } from 'react-router-dom';
// activeClassName="myCustomActiveClass"

const StockSubHeader = (props) => {
  return (
    <div>
      <ul className="sub-nav">
        <li><NavLink to={ `${props.props.match.url}/financials` }>Financials</NavLink></li>
        <li><NavLink to={ `${props.props.match.url}/about` }>About</NavLink></li>
        <li><NavLink to={ `${props.props.match.url}/team` }>Team</NavLink></li>
      </ul>
      <pre>{JSON.stringify(props.props.data)}</pre>
    </div>
  );
};

export default StockSubHeader;
