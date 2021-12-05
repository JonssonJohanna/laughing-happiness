function songDblclick() {
  const christmasSong = document.querySelector('.mySound');
  const powerButton = document.querySelector('.powerButton');
  if (!christmasSong) return;
  christmasSong.currentTime = 0;
  christmasSong.play();
  powerButton.classList.add('doubleclick');
}
window.addEventListener('dblclick', songDblclick);
