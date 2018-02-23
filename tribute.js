$(document).ready(function() {
  $("#model-t").addClass("animated bounceInRight");

  $("#model-t").click(function() {
    $(this).removeClass("bounceInRight");
    $(this).addClass("bounceOutLeft");
  });

  $("#photo").click(function() {
    $("#model-t").removeClass("bounceOutLeft");
    $("#model-t").addClass("bounceInRight");
  });
});
