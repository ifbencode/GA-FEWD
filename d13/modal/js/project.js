
$("#header-sign-in").on("click", function() {
  $("#form-container").show();
  $("body").css("background-color", "rgba(0, 0, 0, .8)");
})

$("#input-email").on("click", function() {
  $(this).val("");
})

$("#input-pw").on("click", function() {
  $(this).val("");
  // $(this).prop('type', 'password');
})

$(document).on('click', function(e) {
  if (!$.contains(document.querySelector('#form-container'), e.target) && !$(e.target).hasClass('button')) {
    $('#form-container').hide();
    $("body").css("background-color", "#FFFFFF");
  }
})

$("#cancel").on("click", function() {
  $("#form-container").hide();
  $("body").css("background-color", "#FFFFFF");
})




// $("body").on("focusout", function() {
//   $("#form-container").fadeToggle(500);
//   $("body").css("background-color", "#FFFFFF");
// })

// $('body').on("click", function(e) {
//   var target = e.target;
//   console.log($(target).attr('id'))
//
//   if ($(target).attr('id') !== 'form-container' && $(target).attr('id') !== 'inputw') {
//     $("#form-container").removeClass("show");
//     $("body").css("background-color", "rgba(0, 0, 0, 0)");
//   }
// });
