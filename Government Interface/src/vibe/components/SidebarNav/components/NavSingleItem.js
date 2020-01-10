import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Feather from 'react-feather';
import NavBadge from './NavBadge';

const NavSingleItem = ({ item }) => {
  const Icon = item.icon && Feather[item.icon] ? Feather[item.icon] : null;
  if (item.external) {
    return (
      <li className="nav-item">
        <a href={item.url}>
          {item.icon && Icon && <Icon className="side-nav-icon" />}
          <span className="nav-item-label">{item.name}</span>
          {item.badge && <NavBadge color={item.badge.variant} text={item.badge.text} />}
        </a>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <NavLink to={item.url} activeClassName="active">
          {item.icon && Icon && <Icon className="side-nav-icon" />}
          <span className="nav-item-label">{item.name}</span>
          {item.badge && <NavBadge color={item.badge.variant} text={item.badge.text} />}
        </NavLink>
      </li>
    );
  }
};

export default NavSingleItem;
