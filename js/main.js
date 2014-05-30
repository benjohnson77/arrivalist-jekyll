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
 

    $("#contact-form").submit(function(ev){
        ev.preventDefault();
          $.ajax({
              type: "post",
              url: "/send_email",
              data: $(this).serialize(),
              dataType: "json",
              success: function(response) {
              $('#contact-form').html("<div id='message'></div>");
              if(response.message === "success") {
                  $('#message').html("<h2>Message successfully sent.</h2>").hide().fadeIn(1500);
              } else {
                  $('#message').html("<h2>Error sending the message</h2>").hide().fadeIn(1500);
              }
              },
              error: function(xhr, ajaxOptions, thrownError){
              $('#contact-form').html("<div id='message'></div>");
              $('#message').html("<h2>Error sending the message</h2>").hide().fadeIn(1500);
              } 
          });
      });
    
});