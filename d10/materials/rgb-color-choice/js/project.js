console.log("color-test");


$("#color-button").on("click", function() {
  var redBackgroundColor = $("#red").val();
  var greenBackgroundColor = $("#green").val();
  var blueBackgroundColor = $("#blue").val();
  // console.log("pushed");
  // console.log("rgb" + "(" + redBackgroundColor + "," + greenBackgroundColor + "," + blueBackgroundColor + ")");
  var userColor = ("rgb(" + redBackgroundColor + "," + greenBackgroundColor + "," + blueBackgroundColor + ")");
  $("#wrapper").css("background-color", userColor);
  $("#colorful-text").text ("rgb" + "(" + redBackgroundColor + "," + greenBackgroundColor + "," + blueBackgroundColor + ")");
});
