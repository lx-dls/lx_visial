window.addEventListener('DOMContentLoaded', () => {
  const pre  = document.getElementById('preloader');
  const fill = document.getElementById('preFill');
  const num  = document.getElementById('preNum');
  let p = 0;

  const tick = () => {
    p++;
    fill.style.width = p + '%';
    num.textContent  = p + '%';
    if (p < 100) {
      setTimeout(tick, 14 + Math.random() * 18);
    } else {
      setTimeout(() => pre.classList.add('hide'), 500);
    }
  };
  tick();
});
