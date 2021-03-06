// Defined a function that connects button with image and image
// change when clicking on the button.

document.querySelector('.powerButton').addEventListener('click', function () {
  const imgBefore = document.querySelector('.christmastreeNotLight');
  if (imgBefore.src.match('/images/christmastreeNotLight.svg')) {
    imgBefore.src = '/images/halfLight.svg';
  } else if (imgBefore.src.match('/images/halfLight.svg')) {
    imgBefore.src = '/images/christmastreeLight.svg';
  } else {
    imgBefore.src = '/images/christmastreeNotLight.svg';
  }
});
