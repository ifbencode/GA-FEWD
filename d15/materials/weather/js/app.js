// 1 Show current temp
// 2 Show icon
// BONUS: Show forecast 24hs from now


// $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Trenton,NJ&units=imperial&appid=b69d52d8b5e834e67958593dedc46fb6", function(data) {
//   // console.log(data["main"]["temp"]);
// });



$("button").on("click", function() {
  // console.log("pushed");
  var cityName = $("input").val();
  // console.log(cityName);
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+(cityName)+"&units=imperial&appid=b69d52d8b5e834e67958593dedc46fb6", function(data) {
    $("span").text(data["main"]["temp"]);
    $("span").css("font-size", "3em");
    $(".icon").html(data["weather"]["icon"]);
  });
})
