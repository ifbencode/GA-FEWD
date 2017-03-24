console.log("celcius project");

$("button").on("click", function() {
  // console.log("pushed");
  var degrees = $("input").val();
  // console.log(degrees = degrees * 1.8 + 32);
  degrees = degrees * 1.8 + 32;
  $("#converted").text(degrees);
  $("#converted").css("font-size", "5em");
})
