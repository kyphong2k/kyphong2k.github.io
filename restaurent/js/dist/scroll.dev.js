"use strict";

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".navbar").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in css)
    $(".navbar").removeClass("active");
  }
});