console.log("Hi");

$("#dropdownOne").on("click", function() {
    // console.log("clicked");
    $("#dropdownMenu").toggleClass("show");
})

$("#dropdownOne").focus(function(){
    $("#dropdownOne").css("background-color", "gray").fadeOut(2000);
});
