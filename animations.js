$(document).ready(function () {
  console.log("jQuery is ready!");

  // helper: the largest "left" value so the box stays inside its stage
  function farRight($box, boxWidth) {
    return $box.parent().width() - boxWidth - 15;
  }

  // original state of every box
  var start = { left: "10px", top: "10px", width: "60px", height: "60px", opacity: 1 };

  // ---------- Task 8: size + position ----------
  $("#a8").click(function () {
    var $b = $("#box8");
    $b.stop(true).animate({
      left: farRight($b, 120) + "px",
      top: "140px",
      width: "120px",
      height: "120px"
    }, 1000);
  });
  $("#r8").click(function () {
    $("#box8").stop(true).animate(start, 500);
  });

  // ---------- Task 9: sequence (animations are queued one after another) ----------
  $("#a9").click(function () {
    var $b = $("#box9");
    $b.stop(true)
      .animate({ left: farRight($b, 60) + "px" }, 700)   // 1. move right
      .animate({ top: "200px" }, 700)                    // 2. move down
      .animate({ width: "30px", height: "30px" }, 700)   // 3. shrink
      .animate(start, 900);                              // 4. return to original
  });
  $("#r9").click(function () {
    $("#box9").stop(true).animate(start, 500);
  });

  // ---------- Task 10: opacity + size + movement in ONE .animate() ----------
  $("#a10").click(function () {
    var $b = $("#box10");
    $b.stop(true).animate({
      opacity: 0.3,
      width: "130px",
      height: "130px",
      left: farRight($b, 130) + "px",
      top: "130px"
    }, 1500);
  });
  $("#r10").click(function () {
    $("#box10").stop(true).animate(start, 600);
  });
});