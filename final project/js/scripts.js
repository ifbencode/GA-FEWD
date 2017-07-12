$("#landing-page").on("click", function(){
  $( this ).fadeOut();
  $("#main-container").fadeIn("show");
})

// $(document).ready(function(){
  $(".contact-link").click(function(){
    $("#contact-form").show();
  })
  $(".close-out").click(function(){
    $("#contact-form").hide();
  })
// })

var textBox = document.getElementById("form-name");
    textBox.onfocus = function() {
        textBox.select();

        // Work around Chrome's little problem
        textBox.onmouseup = function() {
            // Prevent further mouseup intervention
            textBox.onmouseup = null;
            return false;
        };
    };

var text = ["style.", "look.", "method.", "threads.", "you."];
var counter = 0;
var elem = document.getElementById("changeText");
setInterval(change, 1000);

function change() {
    elem.classList.add('hide');
    setTimeout(function () {
        elem.innerHTML = text[counter];
        elem.classList.remove('hide');
        counter++;
        if (counter >= text.length) {
            counter = 0;
        }
    }, 0);
}


$(document).ready(function(){
  $(".hiddenFemaleFigure").hide();
    $(".female").hover(function() {
      $(".shownFemaleFigure").toggle();
      $(".hiddenFemaleFigure").toggle();
  })
})

$(document).ready(function(){
  $(".hiddenMaleFigure").hide();
    $(".male").hover(function() {
      $(".shownMaleFigure").toggle();
      $(".hiddenMaleFigure").toggle();
  })
})
