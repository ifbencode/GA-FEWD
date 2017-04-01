
$("#header-sign-in").on("click", function() {
  // console.log("clicked");
  $("#form-container").toggleClass("show");
  $("body").css("background-color", "rgba(0, 0, 0, .8)");
})


// $("body").on("focusout", function() {
//   $("#form-container").toggleClass("show");
//   $("body").css("background-color", "#FFFFFF");
// })


$('body').on("click", function(e) {
  var target = e.target;
  console.log($(target).attr('id'))

  if ($(target).attr('id') !== 'form-container' && $(target).attr('id') !== 'header-sign-in') {
    $("#form-container").removeClass("show");
    $("body").css("background-color", "rgba(0, 0, 0, 0)");
  }

});
