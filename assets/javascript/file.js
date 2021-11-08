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
    // height: 600,
  });
});

// About Mauritius Toggle
$(document).ready(function() {
  $(".button").click(function() {
      $("p").slideToggle("slow");
  });
});

$(document).ready(function(){
  $('.datepicker').datepicker({
    // autoClose: true,
    format: 'dddd mmmm yyyy',
    firstDay: 1,
    showDaysInNextAndPreviousMonths: true,
    showClearBtn: true,
  })
})



