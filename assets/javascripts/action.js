$(document).ready(function () {

  // Menu Links Scroll
  $(".scroll-link").click(function () {
    var ScrollOffset = $(this).attr('data-soffset');
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - ScrollOffset + "px"
    }, {
      duration: 500,
      easing: "easeInOutCubic"
    });
    return false;
  });

});