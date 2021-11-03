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