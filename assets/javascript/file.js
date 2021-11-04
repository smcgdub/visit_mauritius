// AUTOMATICALLY INIT ALL JS WITH FUNCTION BELOW
document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
});

$(document).ready(function(){
  // Side Navbar
  $('.sidenav').sidenav();
  // Init image slider
  $('.slider').slider({
    interval: 4000,
    transition: 500,
    indicators: false,
    height: 600,
  });
});