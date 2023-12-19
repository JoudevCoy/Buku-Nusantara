// Main Script
async function load(){
  var url = "https://covers.openlibrary.org/b/id/12547191.json";
  await fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err.message))
}


const $ = (el) => {
  if (typeof(el) !== "string"){
    console.error(`Error type of ${el} must be string`)
    return;
  }
  return document.querySelector(el);
}
$("#search-field-btn").onclick = function(){
  const searchField = new bootstrap.Offcanvas("#search-field-mobile");
  searchField.show();
}



// Hide the sidebar mobile in desktop mode
window.addEventListener("resize", () => {
  var width = window.innerWidth;
  if (width >= 992){
    document.getElementById("sidebarMobile-closeBtn").click();
  }
});

const bookDataUrl = "../book.json";
fetch(bookDataUrl)
  .then((res) => res.json)
  .then((bookData) => {
    let = `
    
    `;
    
    
    
  })
  .catch((err) => console.error(err.message))