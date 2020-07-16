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

  // Close Menu on Responsive
  $(document).on("click", function (e) {
    if (e.target.id == "menu-responsive-toggle-close") {
      $("#menu-responsive-toggle").removeAttr("checked");
    }
  });

});