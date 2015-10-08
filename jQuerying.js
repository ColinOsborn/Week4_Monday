$(document).ready(function($) {
$("#hover").mouseenter(function() {
       $("#hover").css("background-color", "red") /////can also use(this), but only inside THIS function. Know what it's being used for.
})
.click(function() {
  $("#hover").toggleClass("green")
})

.mouseleave(function() {
  $("#hover").css("background-color", "#39B7CD")
});

$(".hideMe").click(function() {
  $(".hideMe").hide();
});
$('.changeColor').click(function() {
        $('ul li:nth-child(3)').css('color', 'red');
    });
$("#removeLi").click(function() {
  $("ul li:nth-child(2)").remove();     ///
});
$("#addme").click(function() {
  $("#addme").append("<li>I added this by clicking</li>");
  //$("ul li:nth-child(4)").appendTo("Added by click");
});
$("#makeBig").click(function() {
  $(this).css("font-size", "40px");
  $(".hideThis").hide(); ///.siblings().hide(); <---- Use this if not wanting to give an item class.
});
$(".cute").click(function() {
  var dogIamge = $(this);
  while ($("img.cute").length < 20) {   ///for(i=0; i<20; i++){
   $(this).clone().appendTo(".clones");   //$(this).clone().insertAfter(this);
  }   //method chaining
});
$("body").dblclick(function() {
  $("#makeSquare").css("border-radius", "0");
});
$("#dontClick").click(function() {
  (this).alert("ALERT!");
});


});/// this ends the entire document page function
//# for id's ----- .for classes!!
//$(".colorChange").click(function() {
//$("div p:nth-child(3)").css("background-color", "#8A2BE2");
//});
