const anilar = [
  { foto: "ani1.png", yazi: "İlk buluşmamız" },
  { foto: "ani2.png", yazi: "İlk araba çiğköfte date" },
  { foto: "ani3.png", yazi: "İlk Anıtkabir gezimiz" },
  { foto: "ani4.png", yazi: "İlk konserimiz" },
  { foto: "ani5.png", yazi: "Tuzla sokaklarında" },
  { foto: "ani6.png", yazi: "Galata gezimiz" },
  { foto: "ani7.png", yazi: "Bana aşk ile bakışın 💘" }
];

const timeline = document.getElementById('timeline');
let current = 0;

function sonrakiAni() {
  if (current < anilar.length) {
    const ani = anilar[current];
    const div = document.createElement('div');
    div.className = 'memory';
    div.innerHTML = `
      <img src="/images/${ani.foto}" alt="Anı">
      <p>❤️ ${ani.yazi}</p>
    `;
    timeline.appendChild(div);
    current++;
  } else {
    clearInterval(zamanlayici);
    document.getElementById('finalMessage').style.display = 'block';
  }
}

let zamanlayici;

document.getElementById('playBtn').addEventListener('click', () => {
  const song = document.getElementById('loveSong');
  song.play();
  document.getElementById('playBtn').disabled = true;

  sonrakiAni();
  zamanlayici = setInterval(sonrakiAni, 3000);

  // Kalp efektleri
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.innerText = '❤️';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
});

// Geri sayım
function updateCountdown() {
  const hedef = new Date("2025-05-20T00:00:00").getTime();
  const now = new Date().getTime();
  const fark = hedef - now;

  if (fark <= 0) {
    document.getElementById('countdown').innerText = "Bugün özel günümüz! 🎉";
    return;
  }

  const gun = Math.floor(fark / (1000 * 60 * 60 * 24));
  const saat = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const dakika = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));
  const saniye = Math.floor((fark % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerText =
    `Anılar için geri sayım: ${gun} gün ${saat} saat ${dakika} dakika ${saniye} saniye`;
}

setInterval(updateCountdown, 1000);
updateCountdown();