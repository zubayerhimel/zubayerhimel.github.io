$(function () {
  $(".sidenav").sidenav();

  // on scroll navbar li change
  $("#nav").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
  });

  // on click navbar li change
  // $(document).on("click", "ul li", function () {
  //   $(this).addClass("active").siblings().removeClass("active");
  // });

  // skill bar color set
  $(window).on("load", function () {
    $(".skill_row_percent_view").each(function () {
      thisVal = $(this).text();
      $(this).parent(".skill_row_percent").animate({ width: thisVal }, 200);
    });
  });
});

// banner svg animate
document.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(
    document.querySelector("#bannersvg").classList.add("animated"),
    1000
  );
});
