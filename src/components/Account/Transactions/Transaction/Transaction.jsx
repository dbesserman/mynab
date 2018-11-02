import React from 'react';
import PropTypes from 'prop-types';
import classes from './Transaction.css';

class Transaction extends React.Component {
  dateInFuture(date) {
    return date > new Date;
  }

  dateInPast(date) {
    return !this.dateInFuture(date);
  }

  formatAmount(cents) {
    if (cents === 0 || cents === undefined) {
      return null;
    }

    return `${Math.abs(cents) / 100} €`;
  }

  formatDate = (date) => {
    return `${this.formatDateInt(date.getDay() + 1)}/` +
      `${this.formatDateInt(date.getMonth() + 1)}/` +
      `${date.getFullYear()}`;
  }

  formatDateInt = (int) => {
    if (int < 10) {
      return `0${int}`;
    }

    return int;
  }

  shouldComponentUpdate(nextProps) {
    return this.props.cleared !== nextProps.cleared;
  }

  render() {
    let transactionClasses = [ classes.Transaction ]
    let clearanceButtonClasses = [ classes.clearanceButton ]

    if (this.dateInFuture(this.props.date)) {
      transactionClasses.push(classes.future)
    }

    if (this.props.cleared) {
      clearanceButtonClasses.push(classes.clearanceButtonCleared)
    }

    return (
      <tr className={transactionClasses.join(' ')}>
        <td className={classes.account}><span>{this.props.account}</span></td>
        <td><span>{this.formatDate(this.props.date)}</span></td>
        <td className={classes.payee}><span>{this.props.payee}</span></td>
        <td className={classes.category}><span>{this.props.category}</span></td>
        <td className={classes.memo}><span>{this.props.memo}</span></td>
        <td className={classes.amount}>
          <span>{this.props.variation < 0 ? this.formatAmount(this.props.variation) : null}</span>
        </td>
        <td className={classes.amount}>
          <span>{this.props.variation > 0 ? this.formatAmount(this.props.variation) : null}</span>
        </td>
        <td className={classes.clearance}>
          {
            this.dateInPast(this.props.date) ?
              <span
                className={clearanceButtonClasses.join(' ')}
                onClick={this.props.toggleTransactionClearance}
              >
                c
              </span> 
            : 
            null
          }
        </td>
      </tr>
    )
  }
}

Transaction.propTypes = {
  account: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  payee: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  memo: PropTypes.string,
  inflow: PropTypes.number,
  outflow: PropTypes.number,
}

export default Transaction;
