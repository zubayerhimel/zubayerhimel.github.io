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
    $(".progress").hide();
    $("#main-content").fadeIn();
    $(".skill_row_percent_view").each(function () {
      thisVal = $(this).text();
      $(this).parent(".skill_row_percent").animate({ width: thisVal }, 200);
    });
  });

  // Contact form functionality

  $("#contact-form").submit(function () {
    let url = "https://cuntato.herokuapp.com/api/project-data";
    let data = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val(),
    };
    data = JSON.stringify(data);
    let projectID = "ifabycxffa";
    let currentURL = window.location.href;
    $.post(
      url,
      { data, projectID: projectID, currentURL: currentURL },
      function () {}
    )
      .done(() => {
        M.toast({ html: "Message sent 🤗" });
      })
      .fail(() => {
        M.toast({ html: "Something went wrong 😟" });
      });
  });
});
