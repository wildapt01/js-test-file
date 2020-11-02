//* Date Validation

const dateValid = (date) => {
  const isLeapYear = (yearNum) => {
    return (yearNum % 100 === 0 ? yearNum % 400 === 0 : yearNum % 4 === 0)
      ? 1
      : 0;
  };
  const match = date.match(/^(\d\d)\/(\d\d)\/(\d{4})$/) || [];
  const month = (match[1] | 0) - 1;
  const day = match[2] | 0;
  const year = match[3] | 0;

  const dateEval = !(
    (
      month < 0 || // Before January
      month > 11 || // After December
      day < 1 || // Before the 1st of the month
      day - 30 > ((2773 >> month) & 1) ||
      (month === 1 && day - 28 > isLeapYear(year))
    )
    // Day is 28 or 29, month is 02, year is leap year ==> true
  );

  return `\nDate: ${date}\n\n     Valid Date?: ${dateEval}\n=======================================`;
};

console.log(dateValid("02/28/2020")); // true
console.log(dateValid("02/29/2020")); // true
console.log(dateValid("02/30/2020")); // false
console.log(dateValid("01/31/2020")); // true
console.log(dateValid("01/31/2000")); // true
console.log(dateValid("04/31/2020")); // false
console.log(dateValid("04/31/2000")); // false
console.log(dateValid("04/30/2020")); // true
console.log(dateValid("01/32/2020")); // false
console.log(dateValid("02/28/2021")); // true
console.log(dateValid("02/29/2021")); // false
console.log(dateValid("02/30/2021")); // false
console.log(dateValid("02/28/2000")); // true
console.log(dateValid("02/29/2000")); // true
console.log(dateValid("02/30/2000")); // false
console.log(dateValid("02/28/2001")); // true
console.log(dateValid("02/29/2001")); // false
console.log(dateValid("02/30/2001")); // false
