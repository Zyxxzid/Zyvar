window.addEventListener('scroll', () => {
    const scrollPosY = window.scrollY;
    const text = document.querySelector('.judul-name');
    const textKn = document.getElementById('id1')

    text.style.transform = `translateY(${scrollPosY * 0.6}px)`;
    textKn.style.transform = `translate(${scrollPosY * 0.4}px)`
});


let lastScrollY = 0;
let lastTime = 0;
let velocity = 0;
let rafId;

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
let pos1 = 0;
let pos2 = 0;

function updatePosition() {
    // bikin pergerakan jadi halus dan terus jalan sesuai kecepatan scroll
    pos1 -= velocity * 0.5;
    pos2 += velocity * 0.5;

    // looping biar nggak putus
    text1.style.transform = `translateX(${pos1}px)`;
    text2.style.transform = `translateX(${pos2}px)`;

    // gerak terus sedikit lalu melambat kalau scroll berhenti
    velocity *= 0.95;

    if (Math.abs(velocity) > 0.01) {
        rafId = requestAnimationFrame(updatePosition);
    } else {
        cancelAnimationFrame(rafId);
    }
}

window.addEventListener('scroll', () => {
    const now = performance.now();
    const deltaY = window.scrollY - lastScrollY;
    const deltaTime = now - lastTime;

    // hitung kecepatan scroll
    velocity = deltaY / deltaTime * 20;

    lastScrollY = window.scrollY;
    lastTime = now;

    cancelAnimationFrame(rafId);
    updatePosition();
});


const tombolNav = document.querySelectorAll('nav .nav-menu a')
const sections = document.querySelectorAll('main section')

tombolNav.forEach((tombol, click) =>{
    tombol.addEventListener('click', function () {
        sections.forEach(sec => sec.classList.remove('halaman-main'))
        sections[click].classList.toggle('halaman-main')
    })
})


const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
  type: 'bar', // jenis chart: bar, line, pie, etc.
  data: {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
    datasets: [{
      label: 'Nilai Siswa',
      data: [80, 90, 75, 95, 88],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)'
      ],
      borderColor: 'rgba(255, 255, 255, 0.9)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


