$(document).ready(function () {
  console.log("jQuery is ready!");

  // ---------- Task 5: add & remove elements ----------
  var count = 2; // number of the last created item

  // .append() adds a new <li> to the END of the list
  $("#addItem").click(function () {
    count++;
    $("#list").append("<li>Item " + count + " (append)</li>");
  });

  // .prepend() adds a new <li> to the START of the list
  $("#addTop").click(function () {
    count++;
    $("#list").prepend("<li>Item " + count + " (prepend)</li>");
  });

  // .remove() deletes the last <li>
  $("#removeItem").click(function () {
    $("#list li:last").remove();
  });

  // ---------- Task 6: attributes ----------
  var secondImage = false;

  // .attr("src", ...) changes the image source
  $("#changeSrc").click(function () {
    secondImage = !secondImage;
    var newSrc = secondImage ? "img/img2.svg" : "img/img1.svg";
    $("#attrImg").attr("src", newSrc).attr("alt", secondImage ? "Image 2" : "Image 1");
    $("#srcShow").text($("#attrImg").attr("src"));
  });

  // .attr("href", ...) changes the link address
  $("#changeHref").click(function () {
    $("#myLink").attr("href", "https://api.jquery.com").text("Visit jQuery API");
    $("#hrefShow").text($("#myLink").attr("href"));
  });

  // ---------- Task 7: live form ----------
  // "input" event fires on every typed character; .val() reads the value, .text() shows it
  $("#name").on("input", function () {
    $("#outName").text($(this).val() || "—");
  });
  $("#email").on("input", function () {
    $("#outEmail").text($(this).val() || "—");
  });
});