(function(){
  const pre  = document.getElementById('preloader');
  const fill = document.getElementById('preFill');
  const num  = document.getElementById('preNum');
  if(!pre || !fill || !num) return;

  let p = 0;
  const tick = () => {
    p++;
    fill.style.width = p + '%';
    num.textContent  = p + '%';
    if (p < 100) {
      setTimeout(tick, 14 + Math.random() * 18);
    } else {
      setTimeout(() => {
        pre.classList.add('hide');
        setTimeout(() => pre.classList.add('gone'), 1200);
      }, 400);
    }
  };
  tick();
})();
