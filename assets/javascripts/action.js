$(document).ready(function () {

  // Eyes Animation
  var eyesWatch = (function ($) {

    return {

      init: function () {
        this.bindUIElements();
        this.watchMouseMove();
      },

      bindUIElements: function () {
        this.ui = {
          eyes: $('#eye-container'),
          html: $('html')
        }
      },

      watchMouseMove: function () {

        var top = this.ui.eyes.offset().top,
            left = this.ui.eyes.offset().left,
            height = this.ui.eyes.height(),
            width = this.ui.eyes.width(),
            self = this;

        this.ui.html.on('mousemove', function (e) {

          var className = '';

          if (e.pageY > top + height) {
            className += 's';
          } else if (e.pageY < top) {
            className += 'n';
          }

          if (e.pageX > left + width) {
            className += 'e';
          } else if (e.pageX < left) {
            className += 'w';
          }

          self.ui.eyes.attr('class', className);
          e.stopPropagation();

        });
      }
    }
  })(jQuery);
  eyesWatch.init();

  // Portfolio Hover Image Background Animation
  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $(".portfolio-img").mousemove(function (e) {
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $('.portfolio-img').css("background-position", newvalueX + "px     " + newvalueY + "px");
  });

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