const christmasBubbles = [
  {
    color: 'var(--color-bubble-red)',
    x: 0,
    y: 0,
  },
  {
    color: 'var(--color-bubble-blue)',
    x: 0.15,
    y: -0.5,
  },
  {
    color: 'var(--color-bubble-red)',
    x: -0.24,
    y: -0.7,
  },
  {
    color: 'var( --color-bubble-yellow)',
    x: -0.6,
    y: -0.3,
  },
  {
    color: 'var( --color-bubble-beige)',
    x: 0.4,
    y: -0.0,
  },
  {
    color: 'var( --color-bubble-yellow)',
    x: 0.5,
    y: 0.2,
  },
  {
    color: 'var( --color-bubble-yellow)',
    x: -0.2,
    y: -0.2,
  },
  {
    color: 'var( --color-bubble-yellow)',
    x: -0.6,
    y: 0.26,
  },
  {
    color: 'var( --color-bubble-beige)',
    x: 0,
    y: 0.26,
  },
];

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
  });
});
