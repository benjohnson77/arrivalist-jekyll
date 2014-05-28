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
 
});

<script type="text/javascript" src="http://www.google.com/recaptcha/api/js/recaptcha_ajax.js"></script>

<script type="text/javascript">  
  function showRecaptcha(element) {
     Recaptcha.create("MyPublicKey", element, {
       theme: "red",
       callback: Recaptcha.focus_response_field});
   }
   $(document).ready(function(){
    showRecaptcha('recaptcha_div');

    $("#form").submit(function(ev){
        ev.preventDefault();
        if (!$(this).valid()) return;
        $.ajax({
          type: "post",
          url: "/send",
          data: $('#form').serialize(),
          dataType: "json",
          success: function(response) {
        if(response.message === "success") {
          $.ajax({
              type: "post",
              url: "/send_email",
              data: $('#form').serialize(),
              dataType: "json",
              success: function(response) {
              $('#form').html("<div id='message'></div>");
              if(response.message === "success") {
                  $('#message').html("<h2>Message successfully sent.</h2>").hide().fadeIn(1500);
              } else {
                  $('#message').html("<h2>Error sending the message</h2>").hide().fadeIn(1500);
              }
              },
              error: function(xhr, ajaxOptions, thrownError){
              $('#form').html("<div id='message'></div>");
              $('#message').html("<h2>Error sending the message</h2>").hide().fadeIn(1500);
              } 
          });
        } else {
          showRecaptcha('recaptcha_div');
          $('#notice').html("Captcha failed!").hide().fadeIn(1500);
        }
          },
          error: function(xhr, ajaxOptions, thrownError){
          $('#form').html("<div id='message'></div>");
          $('#message').html("<h2>Error sending the message</h2>").hide().fadeIn(1500);
          }
        });
    });
    });
</script>