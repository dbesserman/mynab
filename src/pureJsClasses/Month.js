class Month {
  constructor(year, monthIndex) {
    this.year = year;
    this.monthIndex = monthIndex;
    this.startDate = new Date(year, monthIndex, 1)
    this.endDate = this.computeEndDate(monthIndex, year)
  }
  computeEndDate(monthIndex, year) {
    // The end date is not included in the month
    // All the events in this month should be strictly inferior to the endDate
    
    if (this.monthIsDecember(monthIndex)) {
      return new Date(year + 1, 0, 1);
    } else {
      return new Date(year, monthIndex + 1, 1);
    }
  }
  monthIsDecember(monthIndex) {
    return monthIndex === 11;
  }
  monthIsJanuary(monthIndex) {
    return monthIndex === 0;
  }
  toString() {
    const self = this;
    return `${self.monthToString(self.monthIndex)} ${self.year}`;
  }
  monthToString(idx) {
    const months =  [
      'jan', 'feb', 'mar', 'apr', 'may', 'jun',
      'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
    ]
    return months[idx];
  }
  nextMonth() {
    return new Month(this.endDate.getFullYear(), this.endDate.getMonth());
  }
  previousMonth() {
    if (this.monthIsJanuary(this.monthIndex)) {
      return new Month(this.year - 1, 11);
    } else {
      return new Month(this.year, this.monthIndex - 1);
    }
  }
}

export default Month;
