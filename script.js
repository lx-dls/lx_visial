// Плавный скролл по меню
document.querySelectorAll('.menu a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      ?.scrollIntoView({behavior:'smooth'});
  });
});

// Пульсация неоновых кнопок
document.querySelectorAll('.btn-neon').forEach(b=>{
  setInterval(()=>{
    b.style.boxShadow = b.style.boxShadow.includes('28px')
      ? '0 0 12px rgba(0,224,255,.4),inset 0 0 12px rgba(0,224,255,.1)'
      : '0 0 28px rgba(0,224,255,.8)';
  },1200);
});

// Копирование промокода по кнопке (пример)
document.querySelectorAll('.btn-gradient').forEach(b=>{
  b.addEventListener('click',()=>{
    navigator.clipboard?.writeText('LXVISUAL');
    b.textContent='Скопировано!';
    setTimeout(()=>b.textContent='Скачать',1500);
  });
});
