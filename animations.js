$(document).ready(function () {
  console.log("jQuery is ready!");

  // Task 8: size + position
  $("#a8").click(function () {
    $("#box8").animate({ left: "400px", top: "100px", width: "120px", height: "120px" }, 1000);
  });
  $("#r8").click(function () {
    $("#box8").stop().animate({ left: "10px", top: "10px", width: "60px", height: "60px" }, 500);
  });

  // Task 9: right -> down -> shrink -> return
  $("#a9").click(function () {
    $("#box9")
      .animate({ left: "400px" }, 800)
      .animate({ top: "180px" }, 800)
      .animate({ width: "30px", height: "30px" }, 800)
      .animate({ left: "10px", top: "10px", width: "60px", height: "60px" }, 800);
  });

  // Task 10: opacity + size + movement in ONE animate()
  $("#a10").click(function () {
    $("#box10").animate({ opacity: 0.3, width: "130px", height: "130px", left: "350px", top: "100px" }, 1500);
  });
  $("#r10").click(function () {
    $("#box10").stop().animate({ opacity: 1, width: "60px", height: "60px", left: "10px", top: "10px" }, 800);
  });
});