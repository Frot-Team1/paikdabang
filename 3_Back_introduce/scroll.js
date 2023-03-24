$(document).ready(function () {
  $(window).scroll(() => {
    $(".scroll_img").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object / 2) {
        $(this).animate({ opacity: "1" }, 500);
      }
    });
  });
});
