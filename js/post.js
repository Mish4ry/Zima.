const typeBtns = document.querySelectorAll('.type-btn');
const uploadZone = document.getElementById('uploadZone');

typeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    typeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const type = btn.dataset.type;
    if (type === 'photo' || type === 'video') {
      uploadZone.style.display = 'block';
    } else {
      uploadZone.style.display = 'none';
    }
  });
});