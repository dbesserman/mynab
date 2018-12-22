import React from 'react';
import MainNavigation from './MainNavigation/MainNavigation.jsx';
import classes from './SideBarSections.css';

const sideBarSections = (props) => {
  return (
    <>
      <ul className={classes.SideBarSections}>
        <MainNavigation />
      </ul>
    </>
  )
}

export default sideBarSections;
