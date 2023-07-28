
$( document ).ready(function() {
  $('logout-btn').click(function(){
    window.location.href = '/';
  })

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





  $(document).click(function () {
    $(".cart-popup").css("display", "none");
  });
});

$(document).ready(function() {
  // Initialize an empty cart
  let cart = [];
  // When an "Order Now" button is clicked...
  $(".order-now").click(function() {
    const itemId = $(this).parent().data('item-id');
    //...
    // Add the item ID to the cart
    cart.push(itemId);

    console.log(cart);
  });
});
