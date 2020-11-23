// Logic

$(document).ready(() => {
  // Button In storage action
  $("#in").click((evnt) => {
    evnt.stopPropagation();
    const newEntry = JSON.stringify($("#entry-form").serializeArray());
    sessionStorage.setItem("entry", newEntry);
    console.log("<< Storage done! >>");
    console.table(newEntry);
  });

  // Button Out of storage action
  $("#out").click((evnt) => {
    evnt.stopPropagation();
    const dataObj = JSON.parse(sessionStorage.getItem("entry"));
    console.log("dataObj :>> ", dataObj);

    for (const record of dataObj) {
      const displayId = record.name.replace("entry", "display");
      const prefix = record.name.startsWith("name") ? "Name: " : "Weight: ";
      $(`#${displayId}`).text(`${prefix}  ${record.value}`);
    }

    console.log("<< Extraction Done! >>");
    sessionStorage.clear();
  });
});
