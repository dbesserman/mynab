import React from 'react';
import MainNavigationItem from './MainNavigationItem/MainNavigationItem';
import classes from './MainNavigation.css';

const mainNavigation = (props) => {
  return (
    <li className={classes.MainNavigation}>
      <nav>
        <ul>
          <MainNavigationItem
            title="budget"
            itemName="budget"
            currentActiveItemName={props.currentActiveItemName}
            activeItemHandler={props.activeItemHandler}
          />
          <MainNavigationItem
            title="all accounts"
            itemName="accounts"
            currentActiveItemName={props.currentActiveItemName}
            activeItemHandler={props.activeItemHandler}
          />
        </ul>
      </nav>
    </li>
  )
}

export default mainNavigation;
