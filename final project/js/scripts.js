$("#landing-page").on("click", function(){
  $(this).fadeOut();
  setInterval(5000);
  $("#main-container").fadeIn("show");
  setInterval(5000);
})

var text = ["style.", "wardrobe.", "gear.", "you."];
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
    }, 10);
}
