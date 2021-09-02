//* Logic




//* jQuery section

$(document).ready(() => {
const currentURL=window.location.href
$("#myURL").text(currentURL)

$("#next-page-btn").click((evnt)=>{
  evnt.stopPropagation()
  const newURL="http://localhost:5500/next_page.html"
  const queryParam="?st_id=0001"


  window.location.assign(`${newURL}${queryParam}`)
})
});
