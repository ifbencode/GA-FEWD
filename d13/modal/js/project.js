
$("#header-sign-in").on("click", function() {
  $("#form-container").fadeToggle(500);
  $("body").css("background-color", "rgba(0, 0, 0, .8)");
})

$("#input-email").on("click", function() {
  $("#input-email").val("");
})

$("#input-pw").on("click", function() {
  $(this).val("");
  $(this).prop('type', 'password');
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
