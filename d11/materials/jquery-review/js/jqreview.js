console.log("jq");

var blankText = " ";
var clickCount = 0;


// $(".box-one").on("click", function() {
//   clickCount = clickCount + 1;
//   // console.log(clickCount);
//   if (clickCount <= 3) {
//     // console.log("hey")
//     $(".box-one").css("background-color", "black");
//     // $(".box-one").css("height", "500px");
//     // $(".box-one").css("width", "500px");
//     $(".box-one").text("I am a box");
//     $(".box-one").height("+=100");
//     $(".box-one").width("+=100");
//     // $(".box-one").width(Math.floor(Math.random()) * 2);
//   }
// });
$(".box-one").css("background-color", "black");

$(".box-one").on("click", function() {
    $(".box-one").toggleClass("bigger");
});

$(".box-two").on("click", function() {
  // console.log("hey")
  $(".box-two").text("I am a box as well!");
  $(".box-two").css("height", "500px");
  $(".box-two").css("width", "500px");
});
