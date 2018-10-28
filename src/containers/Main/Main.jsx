import React from 'react';

import Budget from '../../components/Budget/Budget.jsx';
import Month from '../../pureJsClasses/Month';

import Account from '../../components/Account/Account.jsx';

import classes from './Main.css';

class Main extends React.Component {
  constructor() {
    super();
    const month = new Month(0, 2018);
    this.state = {
      currentMonth: month,
      budget: {
        toBeBudgeted: 1234,
      },
      transactions: [
        {
          account: 'BNP', date: new Date('October 29, 2345 14:18:30'), payee: 'Myself',
          category: 'Future Salary', inflow: 98765432, cleared: false, id: 5
        },
        {
          account: 'BNP', date: new Date('October 28, 2345 14:18:30'), payee: 'Tesla',
          category: 'Future Car', outflow: 3000000, cleared: false, id: 4
        },
        {
          account: 'BNP', date: new Date('October 27, 2345 14:18:30'), payee: 'Amazon',
          category: 'Future Book', outflow: 30, cleared: false, id: 3
        },
        {
          account: 'BNP', date: new Date('October 28, 2018 14:18:30'), payee: 'Amazon',
          category: 'Books', outflow: 3000, cleared: false, id: 2
        },
        {
          account: 'BNP', date: new Date('October 27, 2018 14:45:30'), payee: 'Administration',
          category: 'Taxes', outflow: 45678, cleared: false, id: 1
        }
      ]
    };
  }

  toggleTransactionClearance = transaction => {
    let transactionsCopy = [ ...this.state.transactions ]
    const idx = transactionsCopy.findIndex(tr => tr.id === transaction.id)
    const transactionCopy = { ...transaction, cleared: !transaction.cleared }

    transactionsCopy.splice(idx, 1,transactionCopy)

    this.setState({ transactions: transactionsCopy })
  }

  previousMonthOfYear = () => {
    this.setState((previousState) => {
      let month = previousState.currentMonth.month;
      let year = previousState.currentMonth.year;

      month--
      if (month < 0) {
        month = 11
        year--
      }
      return { currentMonth: new Month(month, year)};
    })
  }

  nextMonth = () => {
    this.setState(previousState => {
      let month = previousState.currentMonth.month;
      let year = previousState.currentMonth.year;

      month = (month + 1) % 12;
      if (month === 0) {
        year++;
      }

      return { currentMonth: new Month(month, year) }
    });
  }

  render() {
    return (
      <main className={classes.Main}>
        {/*
          <Budget
            currentMonth={this.state.currentMonth}
            previousMonth={this.previousMonthOfYear}
            nextMonth={this.nextMonth}
            toBeBudgeted={this.state.budget.toBeBudgeted}
          />
        */}
        <Account
          transactions={this.state.transactions}
          toggleTransactionClearance={this.toggleTransactionClearance}
        />
      </main>
    )
  }
}

export default Main;
