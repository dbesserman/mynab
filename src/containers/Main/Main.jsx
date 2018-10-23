import React from 'react';
import Budget from '../../components/Budget/Budget.jsx';
import MonthOfAYear from '../../pureJsClasses/MonthOfAYear';
import classes from './Main.css';

class Main extends React.Component {
  constructor() {
    super();
    const monthOfAYear = new MonthOfAYear(0, 2018);
    this.state = {
      currentMonthOfAYear: monthOfAYear,
      budget: {
        toBeBudgeted: 1234,
      }
    };
  }

  previousMonthOfYear = () => {
    this.setState((previousState) => {
      let month = previousState.currentMonthOfAYear.month;
      let year = previousState.currentMonthOfAYear.year;

      month--
      if (month < 0) {
        month = 11
        year--
      }
      return { currentMonthOfAYear: new MonthOfAYear(month, year)};
    })
  }

  nextMonthOfAYear = () => {
    this.setState(previousState => {
      let month = previousState.currentMonthOfAYear.month;
      let year = previousState.currentMonthOfAYear.year;

      month = (month + 1) % 12;
      if (month === 0) {
        year++;
      }

      return { currentMonthOfAYear: new MonthOfAYear(month, year) }
    });
  }

  render() {
    return (
      <main className={classes.Main}>
        <Budget
          currentMonthOfAYear={this.state.currentMonthOfAYear}
          previousMonthOfYear={this.previousMonthOfYear}
          nextMonthOfAYear={this.nextMonthOfAYear}
          toBeBudgeted={this.state.budget.toBeBudgeted}
        />
      </main>
    )
  }
}

export default Main;
