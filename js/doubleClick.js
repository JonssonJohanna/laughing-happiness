// Function that connects audio with button and play and
// pause music with doubleclick

document.querySelector('.bell').addEventListener('dblclick', function () {
  const christmasSong = document.querySelector('.mySound');
  document.querySelector('.bell').classList.add('moveBell');
  if (christmasSong.paused) {
    christmasSong.loop = true;
    christmasSong.play();
  } else {
    christmasSong.pause();
    document.querySelector('.bell').classList.remove('moveBell');
  }
});
