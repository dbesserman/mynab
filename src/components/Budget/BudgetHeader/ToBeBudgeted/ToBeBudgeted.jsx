import React from 'react';
import classes from './ToBeBudgeted.css';
import { formatAmount } from '../../../../helpers';

class ToBeBudgeted extends React.Component {
  render() {
    const componentClasses = [classes.ToBeBudgeted]

    if (this.props.amount < 0) {
      componentClasses.push(classes.negative)
    }

    return (
      <div className={componentClasses.join(' ')}>
          <div className={classes.content}>
            <span className={classes.amount}>
              {formatAmount(this.props.amount)}
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
