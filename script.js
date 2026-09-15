// Плавный скролл
document.querySelectorAll('.menu a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
  });
});

// Плавное появление секций при скролле
const io = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting) en.target.classList.add('show');
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Анимация счётчиков
document.querySelectorAll('[data-count]').forEach(el=>{
  const target = +el.dataset.count;
  let cur = 0;
  const step = target / 60;
  const tick = ()=>{
    cur += step;
    if(cur >= target){ el.textContent = target.toLocaleString('ru-RU'); return; }
    el.textContent = Math.floor(cur).toLocaleString('ru-RU');
    requestAnimationFrame(tick);
  };
  const io2 = new IntersectionObserver(en=>{
    if(en[0].isIntersecting){ tick(); io2.disconnect(); }
  });
  io2.observe(el);
});

// Скачивание
document.getElementById('downloadBtn')?.addEventListener('click',()=>{
  window.open('https://t.me/lxvisual','_blank','noopener');
});
document.getElementById('heroDownload')?.addEventListener('click',()=>{
  window.open('https://t.me/lxvisual','_blank','noopener');
});
document.getElementById('heroCommunity')?.addEventListener('click',()=>{
  document.getElementById('community').scrollIntoView({behavior:'smooth'});
});

// Категории
document.querySelectorAll('[data-cat]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.getElementById('gallery').scrollIntoView({behavior:'smooth'});
  });
});

// Лёгкий 3D-tilt для карточек
document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - .5;
    const y = (e.clientY - r.top)/r.height - .5;
    card.style.transform = `translateY(-8px) rotateX(${y*-6}deg) rotateY(${x*6}deg)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform = '';
  });
});
