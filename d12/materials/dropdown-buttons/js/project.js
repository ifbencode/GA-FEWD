// console.log("dropdown buttons")

$("#fileDropDown").on("click", function() {
    // console.log("clicked");
    $("#fileDropMenu").addClass("show");
})

$("#fileDropDown").on("focus", function() {
  // console.log('focus-check');
  $("#fileDropDown").css("background-color", "rgba(0, 0, 0, .3)");
});

$("#fileDropDown").on("focusout", function() {
  // console.log('focus-check');
  $("#fileDropDown").css("background-color", "rgba(0, 0, 0, 0)");
  $("#fileDropMenu").removeClass("show");
});


$("#editDropDown").on("click", function() {
    // console.log("clicked");
    $("#editDropMenu").addClass("show");
})

$("#editDropDown").on("focus", function() {
  // console.log('focus-check');
  $("#editDropDown").css("background-color", "rgba(0, 0, 0, .3)");
});

$("#editDropDown").on("focusout", function() {
  // console.log('focus-check');
  $("#editDropDown").css("background-color", "rgba(0, 0, 0, 0)");
  $("#editDropMenu").removeClass("show");
});
