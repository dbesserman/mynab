import React from 'react';
import MainNavigationItem from './MainNavigationItem/MainNavigationItem.jsx';
import classes from './MainNavigation.css';

const mainNavigation = (props) => {
  return (
    <li className={classes.MainNavigation}>
      <nav>
        <ul>
          <MainNavigationItem
            title="budget"
            itemName="budget"
            path="/budget"
          />
          <MainNavigationItem
            title="all accounts"
            itemName="accounts"
            path="/accounts"
          />
        </ul>
      </nav>
    </li>
  )
}

export default mainNavigation;
