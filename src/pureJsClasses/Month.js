class Month {
  constructor(monthIndex, year) {
    this.month = monthIndex;
    this.year = year;
  }
  toString() {
    const self = this;
    return `${self.monthToString(self.month)} ${self.year}`;
  }
  monthToString(idx) {
    const months =  [
      'jan', 'feb', 'mar', 'apr', 'may', 'jun',
      'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
    ]
    return months[idx];
  }
}

export default Month;
