console.log("celcius project");

$("button").on("click", function() {
  // console.log("pushed");
  var fDegrees = $("input").val(farenheit);
  var cDegrees = $("input").val(celcius);

  // console.log(degrees = degrees * 1.8 + 32);
  console.log(fdegrees = fdegrees * 1.8 + 32);
  // $("#converted").text(fdegrees);
  // $("#converted").css("font-size", "5em");
  //
  // cdegrees = (cdegrees - 32) / 1.8;
  // $("#converted").text(cdegrees);
  // $("#converted").css("font-size", "5em");
})


// $('select').each(function(){
//     var $this = $(this), numberOfOptions = $(this).children('option').length;
//
//     $this.addClass('select-hidden');
//     $this.wrap('<div class="select"></div>');
//     $this.after('<div class="select-styled"></div>');
//
//     var $styledSelect = $this.next('div.select-styled');
//     $styledSelect.text($this.children('option').eq(0).text());
//
//     var $list = $('<ul />', {
//         'class': 'select-options'
//     }).insertAfter($styledSelect);
//
//     for (var i = 0; i < numberOfOptions; i++) {
//         $('<li />', {
//             text: $this.children('option').eq(i).text(),
//             rel: $this.children('option').eq(i).val()
//         }).appendTo($list);
//     }
//
//     var $listItems = $list.children('li');
//
//     $styledSelect.click(function(e) {
//         e.stopPropagation();
//         $('div.select-styled.active').not(this).each(function(){
//             $(this).removeClass('active').next('ul.select-options').hide();
//         });
//         $(this).toggleClass('active').next('ul.select-options').toggle();
//     });
//
//     $listItems.click(function(e) {
//         e.stopPropagation();
//         $styledSelect.text($(this).text()).removeClass('active');
//         $this.val($(this).attr('rel'));
//         $list.hide();
//         //console.log($this.val());
//     });
//
//     $(document).click(function() {
//         $styledSelect.removeClass('active');
//         $list.hide();
//     });
//
// });
