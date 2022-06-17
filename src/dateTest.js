// Testing date formatting from US to ISO and reversed.
// Input: string of date in either format.
// Output: string of date in the other format.
// Example: "MM/DD/YYYY" ==> "YYYY-MM-DD"
//          "YYYY-MM-DD" ==> "MM/DD/YYYY"

const dateISOToUS = (strDate) => {
  const startIsISO = /\d{4}/.test(strDate.substr(0, 4));
  const formattedDate = startIsISO
    ? strDate.replace(/(\d{4})-(\d{2})-(\d{2})/, "$2/$3/$1")
    : strDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$1-$2");
  return formattedDate;
};

console.log(dateISOToUS("1978-03-23"));
console.log(dateISOToUS("03/24/1979"));
