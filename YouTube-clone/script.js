var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
menuIcon.onclick = function() {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
}

//moving scrollbar with a click




const tabList = document.querySelector(".scrollable-tabs-container ul");
const rightArrow = document.querySelector(".scrollable-tabs-container .right-arrow svg");
const leftArrow = document.querySelector(".scrollable-tabs-container .left-arrow svg");
rightArrow.addEventListener("click", () => {
  tabList.scrollLeft += 200;
});
leftArrow.addEventListener("click", () => {
  tabList.scroll -= 200;
});


var cont = document.getElementById("bdy");
cont.style.height = (window.innerHeight);
cont.style.width = window.innerWidth;