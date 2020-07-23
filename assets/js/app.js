$(function () {
  $(".sidenav").sidenav();

  $(document).on("click", "ul li", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(window).on("load", function () {
    $(".skill_row_percent_view").each(function () {
      thisVal = $(this).text();
      $(this).parent(".skill_row_percent").animate({ width: thisVal }, 200);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(
    document.querySelector("#bannersvg").classList.add("animated"),
    1000
  );
});
