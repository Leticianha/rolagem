const container = document.getElementById('scroll-container');
const spans = container.querySelectorAll('span');
let currentIndex = 0;

container.addEventListener('wheel', (e) => {
  container.style.overflow = 'hidden';

  if (e.deltaY > 0) {
    currentIndex = Math.min(currentIndex + 1, spans.length - 1);
  } else {
    currentIndex = Math.max(currentIndex - 1, 0);
  }

  spans.forEach((span, index) => {
    if (index === currentIndex) {
      span.style.display = 'inline';
    } else {
      span.style.display = 'none';
    }
  });
});
