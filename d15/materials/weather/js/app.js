// 1 Show current temp
// 2 Show icon
// BONUS: Show forecast 24hs from now

// $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Trenton,NJ&units=imperial&appid=b69d52d8b5e834e67958593dedc46fb6", function(data) {
//   console.log(data["main"]["temp"]);
// });

$("button").on("click", function() {
  // console.log("pushed");
  var cityName = $("input").val();
    // console.log(cityName);
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+(cityName)+"&units=imperial&appid=b69d52d8b5e834e67958593dedc46fb6", function(data) {
    $(".temperature").text(data["main"]["temp"]);
    $(".temperature").css("font-size", "3em");

    var weatherIcon = data.weather[0].icon;
    // console.log(weatherIcon);
    var iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
    // console.log(iconUrl);
    $(".icon").attr("src", iconUrl);
  });
})
