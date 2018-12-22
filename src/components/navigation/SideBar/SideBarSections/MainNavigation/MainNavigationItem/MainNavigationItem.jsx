import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigationItem.css';

class MainNavigationItem extends React.Component {
  render() {
    return (
      <li
        className={`${classes.MainNavigationItem}  ${classes[this.props.itemName]}`}
      >
        <NavLink to={this.props.path} activeClassName={classes.active}>
          <i></i>
          <span>{this.props.title}</span>
        </NavLink>
      </li>
    )
  }
}

MainNavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default MainNavigationItem;
