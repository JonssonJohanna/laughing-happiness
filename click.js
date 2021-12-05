// // Selected an element (button) and added event listener on click to the button
// const powerButton = document.querySelector('.powerButton');
// powerButton.addEventListener('click', (imageClick) => {
//   console.log('it was clicked');
// });

// Defined a function that conect button with image and image change when clicking on the button
function imageClick() {
  const imgBefore = document.querySelector('.christmastreeNotLight');
  if (imgBefore.src.match('/images/christmastreeNotLight.svg')) {
    imgBefore.src = '/images/halfLight.svg';
  } else {
    imgBefore.src = '/images/christmastreeLight.svg';
  }
}
powerButton.addEventListener('click', songDblclick);
