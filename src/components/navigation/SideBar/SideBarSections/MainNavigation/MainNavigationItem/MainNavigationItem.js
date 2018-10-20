import React from 'react';
import PropTypes from 'prop-types';
import classes from './MainNavigationItem.css';

class MainNavigationItem extends React.Component {
  render() {
    let itemClasses = [classes.MainNavigationItem, classes[this.props.itemName]];

    if (this.props.itemName === this.props.currentActiveItemName) {
      itemClasses.push(classes.active);
    }

    return (
      <li
        className={itemClasses.join(' ')}
        name={this.props.itemName}
        onClick={(e) => this.props.activeItemHandler(e, this.props.itemName)}
      >
        <i></i>
        <span>{this.props.title}</span>
      </li>
    )
  }
}

MainNavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  currentActiveItemName: PropTypes.string.isRequired,
  activeItemHandler: PropTypes.func.isRequired,
}

export default MainNavigationItem;
