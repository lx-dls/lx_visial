// Прелоадер 1 → 100%
const pre=document.getElementById('preloader');
const fill=document.getElementById('preFill');
const num=document.getElementById('preNum');
let p=0;

const tick=()=>{
  p++;
  fill.style.width=p+'%';
  num.textContent=p+'%';
  if(p<100){
    setTimeout(tick, 18 + Math.random()*22);
  } else {
    setTimeout(()=>pre.classList.add('hide'),250);
  }
};
tick();
