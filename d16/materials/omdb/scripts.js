
$("button").on("click", function() {
  var movieName = $("input").val();
  $.getJSON("http://www.omdbapi.com/?t="+(movieName), function(data) {
    var titleAndRating = data["Title"] + " (" + data["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(data["Year"]);

    var posterImg = data["Poster"]
    $(".poster").attr("src", posterImg);
    $(".plot").text(data["Plot"]);

    var justSearched = $("<li>" + data["Title"] + "</li>");
    $("ul").append(justSearched);

    // var movieSearchedLink = $.getJSON("http://www.omdbapi.com/?t="+(movieName)
    // $("ul > li").on("click", function() {
    //   $(this).attr("href", movieSearchedLink);
    // })
  })
})


$("ul").on("click", function(event) {
  console.log($(event.target).text());
})
