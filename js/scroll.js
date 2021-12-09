//
function changeColor() {
  if (window.scrollY > window.innerHeight / 15) {
    document.body.classList.add('backgroundColor');
  } else {
    document.body.classList.remove('backgroundColor');
  }
}
window.addEventListener('scroll', changeColor);
