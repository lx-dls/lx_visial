// Прогресс-бар запускается при загрузке
window.addEventListener('load',()=>{
  const fill=document.getElementById('progressFill');
  const num=document.getElementById('progressNum');
  const target=73;
  let cur=0;
  fill.style.width=target+'%';
  const tick=()=>{
    cur+=1;
    if(cur>=target){num.textContent=target+'%';return;}
    num.textContent=cur+'%';
    setTimeout(tick,20);
  };
  tick();
});

// Модалка "В разработке"
const devModal=document.getElementById('devModal');
document.getElementById('devBtn').addEventListener('click',()=>{
  devModal.classList.add('open');
});
document.getElementById('closeDev').addEventListener('click',()=>{
  devModal.classList.remove('open');
});
devModal.addEventListener('click',e=>{
  if(e.target===devModal) devModal.classList.remove('open');
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape') devModal.classList.remove('open');
});
