//* Proof of concept: API request and web workers

const mockUrl = "https://my.api.mockaroo.com/agency-sites.json?key=2fa979b0";
let dataObj = [];
let counter = 0;

const getDataFetch = async (url) => {
  const response = await fetch(url);
  counter++;
  return response.json();
};

$(document).ready(() => {
  const createView = async () => {
    dataObj = await getDataFetch(mockUrl).then((data) => data.slice(0));

    console.log("counter :>> ", counter);
    const startIndex = Math.random() * 1000 - 10;
    const dataSlice = await dataObj.slice(startIndex, startIndex + 10);
    const headers = Object.keys(dataSlice[0]);
    const headerRow = headers
      .map((item) => `<th class="header">${item}</th>`)
      .join("");
    console.log("counter :>> ", counter);

    const tableHead = `<thead>${headerRow}</thead>`;

    return `<table>${tableHead}</table>`;
  };

  const table = createView();
  $("body").append(`${table}`);
});
