// Test for Validation of Data

const incoming = [
  { name: "AgencyID", value: "PRA" },
  { name: "FSID", value: "L" },
  { name: "Amount", value: "as5000" },
  { name: "FundStart", value: "07/01/2019" },
  { name: "FundEnd", value: "06/30/2020" },
  { name: "FundNumber", value: "Ax-23-45-FO" },
  { name: "Purpose", value: "Something usefusl" }
];

const validTest = list => {
  const result = [];
  for (let obj of list) {
    switch (obj.name) {
      case "Amount":
        if (obj.value) {
          obj.correct = Number(obj.value) ? true : false;
        } else {
          obj.correct = true;
        }
        break;
      case "FundStart":
        obj.correct = moment(obj.value, "MM/DD/YYYY", true).isValid();
        break;

      case "FundEnd":
        obj.correct = moment(obj.value, "MM/DD/YYYY", true).isValid();
        break;

      default:
        obj.correct = true;
        break;
    }
    result.push(obj);
  }
  return result;
};

const validatedObject = validTest(incoming);
const checkFlag = validatedObject.some(item => !item.correct);
console.log("checkFlag :", checkFlag);
if (checkFlag) {
  document.querySelector("h2").style.color = "red";
}
document.body.append(`<div>${JSON.stringify(validatedObject)}</div>`);
