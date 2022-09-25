$(document).ready(function () {
    $( ".btn1" ).click(function() {
        $( ".btn1" ).animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
          }, 5000, function() {
            // Animation complete.
          });
          $( ".btn1" ).css({
            float : "right"
          });
    });
});