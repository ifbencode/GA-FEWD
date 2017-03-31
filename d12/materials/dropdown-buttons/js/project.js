// console.log("dropdown buttons")

$("#fileDropDown").on("click", function() {
    console.log("clicked");
    $("#fileDropMenu").addClass("show");
})

$("#fileDropDown").on("focus", function() {
  // console.log('focus-check');
  $("#fileDropDown").css("background-color", "rgba(0, 0, 0, .3)");
});

$('body').on("click", function(e) {
  var target = e.target;
  console.log($(target).attr('class'))

  if ($(target).attr('class') !== 'dropDownList' && $(target).attr('class') !== 'dropDownHeading') {
    $("#fileDropMenu").removeClass("show");
    $("#fileDropDown").css("background-color", "rgba(0, 0, 0, 0)");
  }
  // console.log('focus-check');
  // setInterval(function(){
  //   $("#fileDropMenu").removeClass("show");
  // }, 100);
});


$("#editDropDown").on("click", function() {
    // console.log("clicked");
    $("#editDropMenu").addClass("show");
})

$("#editDropDown").on("focus", function() {
  // console.log('focus-check');
  $("#editDropDown").css("background-color", "rgba(0, 0, 0, .3)");
});

$('body').on("click", function(e) {
  var target = e.target;

  if ($(target).attr('class') !== 'dropDownList' && $(target).attr('class') !== 'dropDownHeading') {
    $("#editDropMenu").removeClass("show");
    $("#editDropDown").css("background-color", "rgba(0, 0, 0, 0)");
  }

  // $("#editDropDown").css("background-color", "rgba(0, 0, 0, 0)");
  // setInterval(function(){
  //   $("#editDropMenu").removeClass("show");
  // }, 100);
});
