/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// 1. You need to add jquery to your home.ejs
// 2. you need add script tag to your home.ejs file with client.js
// 3. Implement
    // => loadMenu
    // => createMenuItem
    // => renderMenu

// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function () {
  $(".fa-shopping-cart").click(function (event) {
    event.stopPropagation();
    $(".cart-popup").toggle();
  });

  $(document).click(function () {
    $(".cart-popup").css("display", "none");
  });

  //loadOrder function removed here

  $.ajax({
    url: "/api/users/order",
    method: "GET",
    dataType: "json",
    success: function(orderItems) {
      renderOrder(orderItems);
    },
    error: function(error) {
      $('#order-container').html('<p class="error-msg">Error loading order. Please try again later.</p>');
    }

  });




const createOrderItem = function(order_items) {
  const order_item = `
  <div class="orderItems">
  <P> ORDER DETAILS </P>
    <p>ORDER ID = ${order_items.order_id} </p>
    <p>USER ID = ${order_items.user_id}</p>
    <p>ITEM NAME =${order_items.name}</p>
    <p>ITEM PRICE = ${order_items.price}</p>
    <p>ITEM QUANTITY = ${order_items.quantity}</p>
    <P> TOTAL =  ${order_items.quantity*order_items.price}</p>
  </div>
`;

   return order_item;
}


const renderOrder= function(order_items) {
  const $orderContainer = $('.orderContainer');
  $orderContainer.empty();
  console.log(order_items);
  for (const orderItem of order_items.orderItems)  {
    console.log(orderItem);
    const $orderItem = createOrderItem(orderItem);
    $orderContainer.append($orderItem);
  }
}

});

