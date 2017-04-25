var whiteTee = "./imgs/male/male-tee-white.png"
var grayTee = "./imgs/male/male-tee-light-gray.png"
var charcoalTee = "./imgs/male/male-tee-charcoal.png"
var blackTee = "./imgs/male/male-tee-black.png"
var blueTee = "./imgs/male/male-tee-blue.png"
var redTee = "./imgs/male/male-tee-red.png"
var greenTee = "./imgs/male/male-tee-green.png"
var yellowTee = "./imgs/male/male-tee-yellow.png"
var pinkTee = "./imgs/male/male-tee-pink.png"


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

/* Men's outfits */

$("#pants").on("click", function() {
  $("#pants-buttons").addClass("show");
})

$(".close-x-pants").on("click", function() {
  $("#pants-buttons").removeClass("show");
})

$("#whiteTee").on("click", function() {
  $(".tee").attr("src", whiteTee);
})

$("#grayTee").on("click", function() {
  $(".tee").attr("src", grayTee);
})

$("#charcoalTee").on("click", function() {
  $(".tee").attr("src", charcoalTee);
})

$("#blackTee").on("click", function() {
  $(".tee").attr("src", blackTee);
})

$("#blueTee").on("click", function() {
  $(".tee").attr("src", blueTee);
})

$("#redTee").on("click", function() {
  $(".tee").attr("src", redTee);
})

$("#greenTee").on("click", function() {
  $(".tee").attr("src", greenTee);
})

$("#yellowTee").on("click", function() {
  $(".tee").attr("src", yellowTee);
})

$("#pinkTee").on("click", function() {
  $(".tee").attr("src", pinkTee);
})

var bluePants = "./imgs/male/male-pants-blue.png"
var tanPants = "./imgs/male/male-pants-tan.png"
var blackPants = "./imgs/male/male-pants-black.png"
var grayPants = "./imgs/male/male-pants-gray.png"
var dkGrayPants = "./imgs/male/male-pants-dkgray.png"

$("#bluePants").on("click", function() {
  $(".pants").attr("src", bluePants);
})

$("#blackPants").on("click", function() {
  $(".pants").attr("src", blackPants);
})

$("#tanPants").on("click", function() {
  $(".pants").attr("src", tanPants);
})

$("#grayPants").on("click", function() {
  $(".pants").attr("src", grayPants);
})

$("#dkGrayPants").on("click", function() {
  $(".pants").attr("src", dkGrayPants);
})

/* Women's outfits */

var whiteTeeF = "./imgs/female/female-tee-white.png"
var grayTeeF = "./imgs/female/female-tee-gray.png"
var lavenderTeeF = "./imgs/female/female-tee-lavender.png"
var pinkTeeF = "./imgs/female/female-tee-pink.png"
var redTeeF = "./imgs/female/female-tee-red.png"
var navyTeeF = "./imgs/female/female-tee-navy.png"

$("#whiteTeeF").on("click", function() {
  $(".tee").attr("src", whiteTeeF);
})
$("#grayTeeF").on("click", function() {
  $(".tee").attr("src", grayTeeF);
})
$("#lavenderTeeF").on("click", function() {
  $(".tee").attr("src", lavenderTeeF);
})
$("#pinkTeeF").on("click", function() {
  $(".tee").attr("src", pinkTeeF);
})
$("#redTeeF").on("click", function() {
  $(".tee").attr("src", redTeeF);
})
$("#navyTeeF").on("click", function() {
  $(".tee").attr("src", navyTeeF);
})

var dkBluePantsF = "./imgs/female/female-pants-dkblue.png"
var blackPantsF = "./imgs/female/female-pants-black.png"
var dkGrayPantsF = "./imgs/female/female-pants-dkgray.png"

$("#dkBluePantsF").on("click", function () {
  $(".pants").attr("src", dkBluePantsF);
})

$("#blackPantsF").on("click", function () {
  $(".pants").attr("src", blackPantsF);
})

$("#dkGrayPantsF").on("click", function () {
  $(".pants").attr("src", dkGrayPantsF);
})

$("#remove").on("click", function() {
  $("#clothes-container").remove();
})
