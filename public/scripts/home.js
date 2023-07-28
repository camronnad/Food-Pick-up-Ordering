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
$(document).ready(function() {

  const loadMenu = function() {
    $.ajax({
      url: "/api/users/home",
      method: "GET",
      dataType: "json",
      success: function(menuItems) {
       renderMenu(menuItems);
      },
      error: function(error) {
        $('#menu-container').html('<p class="error-msg">Error loading menu. Please try again later.</p>');
      }
    });
  };


const createMenuItem = function(menu) {
  const menuItem = `
  <div class="menuItem">
    <p>${menu.name}<i class="fa fa-plus-circle" aria-hidden="true"></i></p>
    <button class="increment-btn" onclick="incrementQuantity('${menu.name}')">+</button>
    <button class="decrement-btn" onclick="decrementQuantity('${menu.name}')">-</button>
  </div>
`;

   return menuItem;
}

const renderMenu = function(menu) {
  const $menuContainer = $('.menu-container');
  $menuContainer.empty();
  console.log(menu);
  for (const menuItem of menu.menuItems)  {
    console.log(menuItem);
    const $menuItem = createMenuItem(menuItem);
    $menuContainer.prepend($menuItem);
  }
}

loadMenu();

});
