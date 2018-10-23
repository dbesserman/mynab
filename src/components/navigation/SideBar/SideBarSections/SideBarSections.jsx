import React from 'react';
import MainNavigation from './MainNavigation/MainNavigation.jsx';
import classes from './SideBarSections.css';

const sideBarSections = (props) => {
  return (
    <>
      <ul className={classes.SideBarSections}>
        <MainNavigation
          currentActiveItemName={props.currentActiveItemName}
          activeItemHandler={props.activeItemHandler}
        />
      </ul>
    </>
  )
}

export default sideBarSections;
