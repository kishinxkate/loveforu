// Heart rain
// ❤️ Heart rain effect - always falling hearts

const createHeart = () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  heart.innerText = '💖';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
};

setInterval(createHeart, 300); // every 300ms create new heart

// ✨ Sparkle on hover
document.getElementById('sparkle-area').addEventListener('mousemove', function (e) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.top = (e.clientY + window.scrollY) + 'px';
  sparkle.style.left = (e.clientX + window.scrollX) + 'px';
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 600);
});

  <script>
  const emojis = ["❤️", "🌹"];
  const total = 30;

  for (let i = 0; i < total; i++) {
    const elem = document.createElement("div");
    elem.className = "falling";
    elem.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    elem.style.left = Math.random() * 100 + "vw";
    elem.style.animationDuration = (2 + Math.random() * 3) + "s";
    elem.style.fontSize = (20 + Math.random() * 30) + "px";
    document.body.appendChild(elem);
  }
</script>
