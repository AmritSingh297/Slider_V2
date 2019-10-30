var slideIndex = 1;
var val;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n); 
  val.classList.remove('right-animate');
  val.classList.add("left-animate");
}
function minusDivs(n) {
  showDivs(slideIndex += n);
  val.classList.remove('left-animate');
  val.classList.add("right-animate");
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  val =  x[slideIndex-1];
  animation(val);
  function animation(val){
    //val.style.display = 'flex';
    val.setAttribute(
      "style", "display: flex;");

  }
}