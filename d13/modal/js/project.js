
$("#header-sign-in").on("click", function() {
  // console.log("clicked");
  $("#form-container").fadeToggle(500);
  $("body").css("background-color", "rgba(0, 0, 0, .8)");
})

$("#input-email").on("click", function() {
  console.log("input text");
  $("#input-email").val(" ");
})

$("#input-pw").on("click", function() {
  console.log("input text");
  $("#input-pw").val(" ");
  $("input-pw").val("password");
})



// $("body").on("focusout", function() {
//   $("#form-container").fadeToggle(500);
//   $("body").css("background-color", "#FFFFFF");
// })

//
// $('body').on("click", function(e) {
//   var target = e.target;
//   console.log($(target).attr('id'))
//
//   if ($(target).attr('id') !== 'form-container' && $(target).attr('id') !== 'inputw') {
//     $("#form-container").removeClass("show");
//     $("body").css("background-color", "rgba(0, 0, 0, 0)");
//   }
// });
