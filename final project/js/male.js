var grayTee = "./imgs/male/male-tee-light-gray.png"
var bluePants = "./imgs/male/male-pants-blue.png"

$("#tops").hover(function () {
  // console.log("hover");
  $(".tops-secondary-menu").addClass("show");
})

$("body").hover(function () {
  // console.log("hover");
  $(".tops-secondary-menu").removeClass("show");
})

$("#bottoms").hover(function () {
  // console.log("hover");
  $(".bottoms-secondary-menu").addClass("show");
})

$("body").hover(function () {
  // console.log("hover");
  $(".bottoms-secondary-menu").removeClass("show");
})

$("#tees").on("click", function() {
  $("#tees-buttons").addClass("show");
})

$(".close-x-tees").on("click", function() {
  $("#tees-buttons").removeClass("show");
})

$("#pants").on("click", function() {
  $("#pants-buttons").addClass("show");
})

$(".close-x-pants").on("click", function() {
  $("#pants-buttons").removeClass("show");
})

$("#grayTee").on("click", function() {
  $(".tee").attr("src", grayTee);
})

$("#bluePants").on("click", function() {
  $(".pants").attr("src", bluePants);
})

$("#remove").on("click", function() {
  $("#clothes-container").remove();
})
