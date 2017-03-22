console.log("SUP!");



// When the button is clicked grab that value and put it in the h1

$("button").on("click", function() {
  var typedInput = $("input").val();
  $("h1").text(typedInput);
});






// var oldText = $("p.cool").text();
// var newText = " And I added some stuff"
// $("p.cool").text(oldText + newText);

// var clickCount = 0;
// var oldText = $("p.cool").text();
//
//
// $("button").on("click", function() {
//   clickCount = clickCount + 1;
//   console.log(clickCount);
//   if (clickCount === 2) {
//     $("p.cool").text("Button was clicked twice!");
//   } else {
//     $("p.cool").text(oldText);
//   }
// });

// $("p.awesome").on("mouseover", function() {
//   $("p.awesome").text("You're mousing over!");
// });
//
// $("p.awesome").on("mouseout", function() {
//   $("p.awesome").text("You moused out!");
// });
