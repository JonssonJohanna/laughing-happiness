const christmasBubbles = [
  {
    color: '#237EE2',
    x: 0,
    y: 0,
  },
  {
    color: '#E23045',
    x: 0.2,
    y: -0.55,
  },
  {
    color: '#E23045',
    x: -0.24,
    y: 0.18,
  },
  {
    color: '#E6E656',
    x: 0.4,
    y: 0.1,
  },
  {
    color: '#F3CFBA',
    x: -0.3,
    y: -0.5,
  },
  {
    color: '#E6E656',
    x: 0.01,
    y: 0.4,
  },
];

console.log('color', christmasBubbles[0].color);
console.log('x', christmasBubbles[0].x);
console.log('y', christmasBubbles[0].y);

//Skapar fem julkulor (div)->skapar div->adderar classnamn "bubble"->lägger till "bubble" som 'barn' till "bubblesContainer".

//Loops thorugh bubbleInformation and calculates the width and height of the conatiner to make it easier to place the bubbles
// on the X and Y axis, both in desktop and in mobile.
christmasBubbles.forEach((bubbleInformation) => {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const bubblesContainer = document.querySelector('.bubblesContainer');
  bubblesContainer.appendChild(bubble);

  const containerWidth = bubblesContainer.clientWidth;
  const xInPixels = bubbleInformation.x * containerWidth * 0.5;
  const bubblePositionX =
    containerWidth / 2 - bubble.clientWidth / 2 + xInPixels;

  const containerHeight = bubblesContainer.clientHeight;
  const yInPixels = bubbleInformation.y * containerHeight * 0.5;
  const bubblePositionY =
    containerHeight / 2 - bubble.clientHeight / 2 + yInPixels;

  bubble.style.backgroundColor = bubbleInformation.color;
  bubble.style.transform = `translate(${bubblePositionX}px, ${bubblePositionY}px)`;
});

const keyBubbles = document.querySelectorAll('.bubble');

keyBubbles.forEach((keyBubble) => {
  window.addEventListener('keypress', () => {
    keyBubble.classList.toggle('on');
    console.log('hello');
  });
});
