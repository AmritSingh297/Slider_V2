var slideIndex = 1;
var val;
showDivs(slideIndex);
function plusDivs(n) {
  $('.mySlides').animate({ marginLeft: '-966px' }, 1000);
  setTimeout(function () {
    showDivs(slideIndex += n);
  }, 1025);
}
function minusDivs(n) {
  $('.mySlides').animate({ marginLeft: '966px' }, 1000);
  setTimeout(function () {
    showDivs(slideIndex += n);
  }, 1025);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  val = x[slideIndex - 1];
  animation(val);
  function animation(val) {
    val.setAttribute(
      "style", "display: flex;");

  }
}