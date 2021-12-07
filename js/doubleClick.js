// Function that connects audio with button and play and
// pause music with doubleclick

document
  .querySelector('.powerButton')
  .addEventListener('dblclick', function () {
    const christmasSong = document.querySelector('.mySound');
    const powerButton = document.querySelector('.powerButton');
    if (christmasSong.paused) {
      christmasSong.loop = true;
      christmasSong.play();
    } else {
      christmasSong.pause();
    }
  });
