$(document).ready(function () {
  console.log("jQuery is ready!");

  // Task 2: visibility
  $("#hide").click(function () { $("#para").hide(); });
  $("#show").click(function () { $("#para").show(); });
  $("#toggle").click(function () { $("#para").toggle(); });

  // Task 3: fade (800 ms)
  $("#fIn").click(function () { $("#fadeImg").fadeIn(800); });
  $("#fOut").click(function () { $("#fadeImg").fadeOut(800); });
  $("#fToggle").click(function () { $("#fadeImg").fadeToggle(800); });

  // Task 4: slide (500 ms)
  $("#sUp").click(function () { $("#panel").slideUp(500); });
  $("#sDown").click(function () { $("#panel").slideDown(500); });
  $("#sToggle").click(function () { $("#panel").slideToggle(500); });
});