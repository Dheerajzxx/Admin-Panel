
$(document).ready(function () {

    $(".main-content").click(function () {
        var wdth = $(window).width();
        if (wdth <= 768) {
            if ($('#nav-toggle').prop("checked") == true) {
                $("#nav-toggle").prop("checked", false);
            }
        }
    });
});

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
function zoomThis(id) {
  var img = document.getElementById(id);
  modal.style.display = "block";
  modalImg.src = img.src;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}





