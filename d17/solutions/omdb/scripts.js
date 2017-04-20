var movies = [];

$("button.search").on("click", function() {
  var title = $("input").val();
  $.getJSON("http://omdbapi.com/?t=" + title, function (monkey) {
    var titleAndRating = monkey["Title"] + " (" + monkey["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(monkey["Year"]);
    $(".poster").attr("src", monkey["Poster"]);
    $(".plot").text(monkey["Plot"]);

    var li = $("<li>" + monkey["Title"] + "</li>");
    $("ul.search-history").append(li);

    var stashedMovie = {
      title: monkey["Title"],
      score: monkey["Ratings"][1]["Value"]
    }

    movies.push(stashedMovie);
  });
});

$("ul").on("click", function(event) {
  var title = $(event.target).text();

  $.getJSON("http://omdbapi.com/?t=" + title, function(data) {
    var titleAndRating = data["Title"] + " (" + data["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(data["Year"]);
    $(".poster").attr("src", data["Poster"]);
    $(".plot").text(data["Plot"]);
  });
})

$(".good-movies").change(function () {
  if(this.checked === true) {
    $("ul").children().remove();

      movies.forEach(function(aSingleMovie) {
        var scoreAsInt = parseInt(aSingleMovie["score"])
        if ( scoreAsInt > 50 ) {
          var li = $("<li>" + aSingleMovie["title"] + "</li>");
          $("ul.search-history").append(li);
        }
      })
  }
})


// $("button.filter").on("click", function() {
//   $("ul").children().remove();
//
//   movies.forEach(function(aSingleMovie) {
//     var scoreAsInt = parseInt(aSingleMovie["score"])
//     if ( scoreAsInt > 50 ) {
//       var li = $("<li>" + aSingleMovie["title"] + "</li>");
//       $("ul.search-history").append(li);
//     }
//   })
// })
