$(document).ready(function () {
  console.log("jQuery is ready!");

  // shows how many sections are open
  function updateCounter() {
    var open = $(".acc-item.open").length;
    var total = $(".acc-item").length;
    $("#counter").text(open + " of " + total + " sections open");
  }

  // open the first section by default
  $(".acc-item:first").addClass("open").find(".acc-body").show();
  updateCounter();

  // click on a section title
  $(".acc-head").click(function () {
    var $item = $(this).closest(".acc-item");
    var $body = $item.find(".acc-body");

    $body.stop(true, true);                       // finish the previous animation
    var opening = !$body.is(":visible");          // will this section open or close?

    // close all other sections
    $(".acc-item").not($item).removeClass("open")
      .find(".acc-body").stop(true, true).slideUp(300);

    // open or close the clicked section with a slide animation
    $item.toggleClass("open", opening);
    $body.slideToggle(300);

    updateCounter();
  });

  // Expand all
  $("#openAll").click(function () {
    $(".acc-item").addClass("open").find(".acc-body").stop(true, true).slideDown(300);
    updateCounter();
  });

  // Collapse all
  $("#closeAll").click(function () {
    $(".acc-item").removeClass("open").find(".acc-body").stop(true, true).slideUp(300);
    updateCounter();
  });
});