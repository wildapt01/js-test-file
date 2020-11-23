// Logic

$(document).ready(() => {
  // Button action

  $(".input-zone").change((evnt) => {
    evnt.preventDefault();
    const entry = $(".input-zone").val();
    console.log("entry :>> ", entry);
    if (entry) {
      const newURL = `../src/second.html/?val=${entry}`;
      $(".link").attr("href", newURL);
    }
  });
});
