// Task 0: runs when the page (DOM) is fully loaded
$(document).ready(function () {
  console.log("jQuery is ready!");
  $("#status").text("✅ jQuery is ready!");

  // Task 1: selector by ID + .text()
  $("#btnText").click(function () {
    $("#myId").text("Text changed with .text() (selected by ID)");
  });

  // Task 1: selector by class + .html()
  $(".myClass").length; // both paragraphs with this class are selected
  $("#btnHtml").click(function () {
    $(".myClass").html("<b>HTML changed</b> with <i>.html()</i> (selected by class)");
  });

  // Task 1: selector by tag + .css()
  $("#btnCss").click(function () {
    $("h3").css({
      color: "#ff7ab6",
      "font-size": "1.8rem",
      "letter-spacing": "2px"
    });
  });

  // Reset: reload the page
  $("#btnReset").click(function () {
    location.reload();
  });
});