$( document ).ready(function() {
  $('logout-btn').click(function(){
    window.location.href = '/';
  })
});

$( document ).ready(function() {
  $('btn-btn-primary').click(function(){

        $(".orderButton").toggleClass("active");
      //loadOrder function removed here

        $.ajax({
          url: "/api/users/order",
          method: "POST",
          dataType: "json",
          success: function(response) {
            if (response.success) {
              showConfirmationPopup();
              // Send SMS to the restaurant
              sendSMS();
            }
          },
          error: function(error) {
            // Handle any error that occurs during the AJAX request
            console.error("Error placing order:", error);
            // Show an error message to the user
            showErrorMessage("Error placing order. Please try again later.");
          }
        });
      });
    })
