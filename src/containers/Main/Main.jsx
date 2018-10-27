import React from 'react';
import Budget from '../../components/Budget/Budget.jsx';
import Month from '../../pureJsClasses/Month';
import classes from './Main.css';

class Main extends React.Component {
  constructor() {
    super();
    const month = new Month(0, 2018);
    this.state = {
      currentMonth: month,
      budget: {
        toBeBudgeted: 1234,
      }
    };
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
        <Budget
          currentMonth={this.state.currentMonth}
          previousMonth={this.previousMonthOfYear}
          nextMonth={this.nextMonth}
          toBeBudgeted={this.state.budget.toBeBudgeted}
        />
      </main>
    )
  }
}

export default Main;
