
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

    // Function to handle the plus button click
function increaseQuantity(item) {
  const quantityElement = item.querySelector("span");
  let quantity = parseInt(quantityElement.innerText);
  quantity++;
  quantityElement.innerText = quantity;
}

// Function to handle the minus button click
function decreaseQuantity(item) {
  const quantityElement = item.querySelector("span");
  let quantity = parseInt(quantityElement.innerText);
  if (quantity > 0) {
    quantity--;
    quantityElement.innerText = quantity;
  }
}

// Event listeners to plus and minus buttons
const plusButtons = document.querySelectorAll(".fa-plus-circle");
const minusButtons = document.querySelectorAll(".fa-minus-circle");

plusButtons.forEach(button => {
  button.addEventListener("click", function() {
    const parentItem = button.parentElement;
    increaseQuantity(parentItem);
  });
});

minusButtons.forEach(button => {
  button.addEventListener("click", function() {
    const parentItem = button.parentElement;
    decreaseQuantity(parentItem);
  });
});

function submitOrder() {
  // Your order submission logic here
  alert("Your order has been submitted!");
  // Show the cart container when the order is submitted
  const cartContainer = document.querySelector(".fas fa-shopping-cart");
  cartContainer.style.display = "block";
  };





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
