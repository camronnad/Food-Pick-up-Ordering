// Client facing scripts here
$(document).ready(function () {
  $(".fa-shopping-cart").click(function (event) {
    event.stopPropagation();
    $(".cart-popup").toggle();
  });

  $(document).click(function () {
    $(".cart-popup").css("display", "none");
  });
});
