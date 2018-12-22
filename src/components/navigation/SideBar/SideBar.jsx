import React from 'react';
import SideBarSections from './SideBarSections/SideBarSections.jsx';
import classes from './SideBar.css';

class SideBar extends React.Component {
  render() {
    return (
      <nav className={classes.SideBar}>
        <h1>My Budget</h1>
        <SideBarSections />
      </nav>
    );
  }
}

export default SideBar;
