import React from 'react';
import classes from './ToBeBudgeted.css';

class ToBeBudgeted extends React.Component {
  formatAmount = amount => `${amount / 100}€`

  render() {
    return (
      <div className={classes.ToBeBudgeted}>
          <div className={classes.content}>
            <span className={classes.amount}>
              {this.formatAmount(this.props.amount)}
            </span>
            <span className={classes.caption}>To be Budgeted</span>
          </div>
          <div className={classes.pointer}>
        </div>
      </div>
    )
  }
}

export default ToBeBudgeted;
