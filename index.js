const button = document.querySelector('button');
button.addEventListener('click', function () {
  button.style.color = `#b36b00`;
});

const mouseTracker = document.querySelector('.mouseTracker');
addEventListener('mousemove', function (event) {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  mouseTracker.style.transition = '0s';
  mouseTracker.style.left = x;
  mouseTracker.style.top = y;
});
