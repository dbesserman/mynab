import React from 'react';
import SideBarSections from './SideBarSections/SideBarSections.jsx';
import classes from './SideBar.css';

class SideBar extends React.Component {
  state = {
    activeItem: 'budget',
  }

  activeItemHandler = (event, itemName) => {
    this.setState({ activeItem: itemName })
  }

  render() {
    return (
      <nav className={classes.SideBar}>
        <h1>My Budget</h1>
        <SideBarSections
          currentActiveItemName={this.state.activeItem}
          activeItemHandler={this.activeItemHandler}
        />
      </nav>
    );
  }
}

export default SideBar;
