//* Date Validation

const dateValidation = (strDate) => {
  const match = strDate.match(/^(\d\d)\/(\d\d)\/(\d{4})$/) || [];
  const month = (match[1] | 0) - 1;
  const day = match[2] | 0;
  const year = match[3] | 0;
  // console.log("date: ", strDate);
  // console.log(
  //   month === 1 &&
  //     !(day < 30) &&
  //     Boolean((!(year % 4) && year % 100) || !(year % 400))
  // );

  return !(
    month < 0 || // Before January
    month > 11 || // After December
    day < 1 || // Before the 1st of the month
    day - 30 > ((2773 >> month) & 1) || // After the 30th or 31st of the month using bitmap
    !(
      month === 1 &&
      day < 30 &&
      Boolean((!(year % 4) && year % 100) || !(year % 400))
    )
  );
};

console.log("01/01/2020 ==> ", dateValidation("01/01/2020"));
console.log("13/01/2020 ==> ", dateValidation("13/01/2020"));
console.log("02/30/2020 ==> ", dateValidation("02/30/2020"));
console.log("02/29/2020 ==> ", dateValidation("02/29/2020"));
console.log("02/29/2021 ==> ", dateValidation("02/29/2021"));
console.log("02/29/2001 ==> ", dateValidation("02/29/2001"));
console.log("02/28/2001 ==> ", dateValidation("02/28/2001"));
console.log("02/29/2000 ==> ", dateValidation("02/29/2000"));
