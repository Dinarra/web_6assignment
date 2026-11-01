$(document).ready(function () {
  console.log("jQuery is ready!");

  // Task 5
  var count = 2;
  $("#append").click(function () {
    count++;
    $("#list").append("<li>Item " + count + " (appended)</li>");
  });
  $("#prepend").click(function () {
    count++;
    $("#list").prepend("<li>Item " + count + " (prepended)</li>");
  });
  $("#remove").click(function () {
    $("#list li:last").remove();
  });

  // Task 6
  var toggled = false;
  $("#changeSrc").click(function () {
    toggled = !toggled;
    $("#attrImg").attr("src", toggled ? "img/img2.svg" : "img/img1.svg");
  });
  $("#changeHref").click(function () {
    $("#myLink").attr("href", "https://www.w3schools.com/jquery/").text("Link: w3schools.com/jquery");
  });

  // Task 7
  $("#name").on("input", function () {
    $("#outName").text($(this).val());
  });
  $("#email").on("input", function () {
    $("#outEmail").text($(this).val());
  });
});