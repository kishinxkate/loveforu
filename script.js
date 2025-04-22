// Heart rain
const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerText = '💖';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  };
  setInterval(createHeart, 300);
  
  // Sparkle hover
  document.getElementById('sparkle-area').addEventListener('mousemove', function (e) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.top = (e.clientY + window.scrollY) + 'px';
    sparkle.style.left = (e.clientX + window.scrollX) + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  });
  