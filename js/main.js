$(document).ready(function() {

 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 0,
      paginationSpeed : 0,
      singleItem: true,
      autoPlay: true,
      rewindSpeed: 0
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
  $.ajaxSetup({
      type: 'POST',
      headers: { "cache-control": "no-cache" }
  });

});




jQuery(function($) {
  $('#form').on("click", "#submit", function(ev) {
    ev.preventDefault();
    
    var $form = $("#contactform").serialize();
    $.ajax({
        type: "post",
        url: "send_email",
        data: $form,
        async: 'true',
        dataType: "json",
        success: function(response) {
        if(response.message === "success") {
            $('#error').html("<h2>Message successfully sent.</h2>").hide().fadeIn(1500);
        } else {
            $('#error').html("<h2>Error sending the message</h2>").hide().fadeIn(1500);
        }
        },
        error: function(xhr, ajaxOptions, thrownError){
        $('#error').html("<h2>Error sending the message</h2>").hide().fadeIn(1500);
        } 
    });
  });
});