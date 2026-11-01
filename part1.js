$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#btnText").click(function () {
    $("#myId").text("Text changed with .text()!");
  });

  $("#btnHtml").click(function () {
    $(".myClass").html("<b>HTML changed</b> with <i>.html()</i>!");
  });

  $("#btnCss").click(function () {
    $("h3").css({ color: "red", "font-size": "28px", "background-color": "#ffeaa7" });
  });
});