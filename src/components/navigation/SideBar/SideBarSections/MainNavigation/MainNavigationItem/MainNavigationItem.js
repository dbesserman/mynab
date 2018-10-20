import React from 'react';
import classes from './MainNavigationItem.css';

const MainNavigationItem = (props) => {
  let itemClasses = [classes.MainNavigationItem, classes[props.itemName]];

  if (props.itemName === props.currentActiveItemName) {
    itemClasses.push(classes.active);
  }

  return (
    <li
      className={itemClasses.join(' ')}
      name={props.itemName}
      onClick={(e) => props.activeItemHandler(e, props.itemName)}
    >
      <i></i>
      <span>{props.title}</span>
    </li>
  )
}

export default MainNavigationItem;
