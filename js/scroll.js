// funcion that changes the background color when user scroll down.
// Creates a new class "BackgroundColor".

function changeColor() {
  if (window.scrollY > window.innerHeight / 10) {
    document.body.classList.add('backgroundColor');
  } else {
    document.body.classList.remove('backgroundColor');
  }
}
window.addEventListener('scroll', changeColor);
