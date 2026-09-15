// Плавный скролл
document.querySelectorAll('.menu a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
  });
});

// Внешние ссылки (сообщество, футер)
document.querySelectorAll('[data-link]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    window.open(btn.dataset.link,'_blank','noopener');
  });
});

// Кнопки "Открыть" в визуалах
document.querySelectorAll('[data-cat]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    alert('Раздел "'+btn.dataset.cat+'" откроется после подключения каталога.');
  });
});

// Модалка входа
const loginModal = document.getElementById('loginModal');
const loginMsg   = document.getElementById('loginMsg');
const loginForm  = document.getElementById('loginForm');

function openLogin(){ loginModal.classList.add('open'); }
function closeLogin(){ loginModal.classList.remove('open'); loginMsg.textContent=''; }

document.getElementById('loginBtn').addEventListener('click', openLogin);
document.getElementById('closeLogin').addEventListener('click', closeLogin);
loginModal.addEventListener('click', e=>{ if(e.target===loginModal) closeLogin(); });

loginForm.addEventListener('submit', e=>{
  e.preventDefault();
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value.trim();

  if(user.length < 3 || pass.length < 4){
    loginMsg.className='modal-msg err';
    loginMsg.textContent='Логин от 3 символов, пароль от 4.';
    return;
  }

  // Сохраняем сессию локально
  localStorage.setItem('lx_user', user);
  loginMsg.className='modal-msg ok';
  loginMsg.textContent='Успешный вход, '+user+'!';
  setTimeout(()=>{
    closeLogin();
    document.getElementById('loginBtn').textContent = user;
    document.getElementById('loginBtn').classList.remove('btn-ghost');
    document.getElementById('loginBtn').classList.add('btn-primary');
  },700);
});

// Если уже вошёл — показываем ник
const saved = localStorage.getItem('lx_user');
if(saved){
  const b = document.getElementById('loginBtn');
  b.textContent = saved;
  b.classList.remove('btn-ghost');
  b.classList.add('btn-primary');
}

// Кнопки скачивания / демо / сообщество
document.getElementById('downloadBtn')?.addEventListener('click',()=>{
  window.open('https://github.com/lx-dls/lx_v/releases','_blank','noopener');
});
document.getElementById('heroDownload')?.addEventListener('click',()=>{
  window.open('https://github.com/lx-dls/lx_v/releases','_blank','noopener');
});
document.getElementById('heroDemo')?.addEventListener('click',()=>{
  document.getElementById('features').scrollIntoView({behavior:'smooth'});
});
document.getElementById('heroCommunity')?.addEventListener('click',()=>{
  document.getElementById('community').scrollIntoView({behavior:'smooth'});
});
document.getElementById('reportBtn')?.addEventListener('click',()=>{
  window.open('https://github.com/lx-dls/lx_v/issues','_blank','noopener');
});
