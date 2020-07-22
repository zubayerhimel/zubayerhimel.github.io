$(function () {
  $(document).on("click", "ul li", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(
    document.querySelector("#bannersvg").classList.add("animated"),
    1000
  );
});
