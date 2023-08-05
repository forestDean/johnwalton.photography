import React from 'react';
import "./LinksMenu.css";
import { NavLink, Outlet } from 'react-router-dom';
import routesList from '../Router/routesList.json';

const LinksMenu = () => {

  const linksList = routesList.filter((item) => item.label !== 'home');
  return (
    <>
      <nav id='mainMenu'>
        <ul>
        {linksList.map(item => (
            <li key={item.path}>
              <NavLink to={item.path} className={item.class}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default LinksMenu;
