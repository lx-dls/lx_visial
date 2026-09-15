// Плавный скролл
document.querySelectorAll('.menu a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
  });
});

// Появление секций
const io = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting) e.target.classList.add('show');
}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Счётчики
document.querySelectorAll('[data-count]').forEach(el=>{
  const t=+el.dataset.count;let c=0;const s=t/60;
  const tick=()=>{c+=s;if(c>=t){el.textContent=t.toLocaleString('ru-RU');return;}
    el.textContent=Math.floor(c).toLocaleString('ru-RU');requestAnimationFrame(tick)};
  const o=new IntersectionObserver(e=>{if(e[0].isIntersecting){tick();o.disconnect()}});
  o.observe(el);
});

// 3D-tilt
document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`translateY(-8px) rotateX(${y*-6}deg) rotateY(${x*6}deg)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});

// === Модалка входа ===
const loginModal=document.getElementById('loginModal');
const cabinetModal=document.getElementById('cabinetModal');
const loginMsg=document.getElementById('loginMsg');

function openLogin(){ loginModal.classList.add('open'); }
function closeLogin(){ loginModal.classList.remove('open'); loginMsg.textContent=''; }
function openCabinet(user){
  document.getElementById('cabUser').textContent='Привет, '+user+'!';
  document.getElementById('cabKey').value='LX-'+btoa(user).slice(0,6).toUpperCase()+'-2026-'+Math.random().toString(36).slice(2,8).toUpperCase();
  cabinetModal.classList.add('open');
}
function closeCabinet(){ cabinetModal.classList.remove('open'); }

document.getElementById('loginBtn').addEventListener('click',()=>{
  const u=localStorage.getItem('lx_user');
  u ? openCabinet(u) : openLogin();
});
document.getElementById('heroLogin').addEventListener('click',()=>{
  const u=localStorage.getItem('lx_user');
  u ? openCabinet(u) : openLogin();
});
document.getElementById('closeLogin').addEventListener('click',closeLogin);
document.getElementById('closeCabinet').addEventListener('click',closeCabinet);
loginModal.addEventListener('click',e=>{ if(e.target===loginModal) closeLogin(); });
cabinetModal.addEventListener('click',e=>{ if(e.target===cabinetModal) closeCabinet(); });

document.getElementById('loginForm').addEventListener('submit',e=>{
  e.preventDefault();
  const user=document.getElementById('loginUser').value.trim();
  const pass=document.getElementById('loginPass').value.trim();
  if(user.length<3||pass.length<4){
    loginMsg.className='modal-msg err';
    loginMsg.textContent='Логин от 3 символов, пароль от 4.';
    return;
  }
  localStorage.setItem('lx_user',user);
  loginMsg.className='modal-msg ok';
  loginMsg.textContent='Успешный вход!';
  setTimeout(()=>{
    closeLogin();
    document.getElementById('loginBtn').textContent=user;
    document.getElementById('loginBtn').classList.remove('btn-glass');
    document.getElementById('loginBtn').classList.add('btn-primary');
    openCabinet(user);
  },600);
});

document.getElementById('cabCopy').addEventListener('click',()=>{
  navigator.clipboard.writeText(document.getElementById('cabKey').value);
  document.getElementById('cabCopy').textContent='Скопировано!';
  setTimeout(()=>document.getElementById('cabCopy').textContent='Скопировать ключ',1500);
});
document.getElementById('cabLogout').addEventListener('click',()=>{
  localStorage.removeItem('lx_user');
  location.reload();
});

// Если уже вошёл
const savedUser=localStorage.getItem('lx_user');
if(savedUser){
  const b=document.getElementById('loginBtn');
  b.textContent=savedUser;
  b.classList.remove('btn-glass');
  b.classList.add('btn-primary');
}

// Скачивание
['downloadBtn','heroDownload','ctaDownload'].forEach(id=>{
  document.getElementById(id)?.addEventListener('click',()=>{
    window.open('https://t.me/lxvisual','_blank','noopener');
  });
});

// Тарифы
document.querySelectorAll('[data-plan]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    window.open('https://t.me/lxvisual','_blank','noopener');
  });
});

// Видео
document.querySelector('.video-placeholder')?.addEventListener('click',()=>{
  alert('Сюда вставь iframe YouTube или mp4.');
});
