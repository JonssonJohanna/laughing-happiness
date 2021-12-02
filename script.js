// Selected an element (christmas tree image) and added event listener on click to the christmas tree
const imgBefore = document.querySelector('.christmastreeNotLight');
imgBefore.addEventListener('click', (imageClick) => {
  console.log('it got clicked');
});
// // Selected an element (button) and added event listener on click to the button
const powerButton = document.querySelector('.powerButton');
powerButton.addEventListener('click', (imageClick) => {
  console.log('it got clicked');
});
// Defined a function that conect button with image and image change when clicking on the button
function imageClick() {
  const imgBefore = document.querySelector('.christmastreeNotLight');
  if (imgBefore.src.match('/images/notLight.svg')) {
    imgBefore.src = '/images/light.svg';
  } else {
    imgBefore.src = '/images/notLight.svg';
  }
}
