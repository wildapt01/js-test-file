//* Date Validation

function dateValid(date) {
  var match = date.match(/^(\d\d)\/(\d\d)\/(\d{4})$/) || [];
  var m = (match[1] | 0) - 1;
  var d = match[2] | 0;
  var y = match[3] | 0;
  return !(
    m < 0 || // Before January
    m > 11 || // After December
    d < 1 || // Before the 1st of the month
    d - 30 > ((2773 >> m) & 1) || // After the 30th or 31st of the month using bitmap
    (m == 1 &&
      // d - 28 > ((!(y % 4) && y % 100) || !(y % 400)))
      d - 28 > !(y % 4 || (!(y % 100) && y % 400)))
  );
}

console.log("01/01/2020 ==> ", dateValid("01/01/2020"));
console.log("13/01/2020 ==> ", dateValid("13/01/2020"));
console.log("02/29/2000 ==> ", dateValid("02/29/2000"));
console.log("02/29/2001 ==> ", dateValid("02/29/2001"));
console.log("02/30/2020 ==> ", dateValid("02/30/2020"));
console.log("02/29/2020 ==> ", dateValid("02/29/2020"));
console.log("02/29/2021 ==> ", dateValid("02/29/2021"));
console.log("02/29/2001 ==> ", dateValid("02/29/2001"));
console.log("02/27/2001 ==> ", dateValid("02/27/2001"));
console.log("02/29/2000 ==> ", dateValid("02/29/2000"));
console.log("02/30/2000 ==> ", dateValid("02/29/2000"));
