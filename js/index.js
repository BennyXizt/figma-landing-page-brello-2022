$(document).ready(function () {
  $(".header__burger").click(function (e) {
    $(".header__burger, .header__navigation").toggleClass("active");
  });

  $(".card-statistic_item").each(function () {
    $(this).css({
      height: $(this).attr("data-height"),
    });
  });

  $("._animate-number").each(function () {
    $(this)
      .prop({
        "counter": -1,
      })
      .animate(
        {
          counter: Number.parseInt($(this).text()),
        },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  $(".brands__swiper-button-left").click(function () {
    let itemW = Number.parseInt($(".brands__swiper-link").css("width"))
    let mleft = Number.parseInt($(".brands__swiper-list").css("margin-left")) + itemW * 2 + 60
    $(".brands__swiper-list").css({
        marginLeft: mleft + "px"
    })
  })
});
