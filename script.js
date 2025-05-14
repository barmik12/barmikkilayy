const anilar = [
  { foto: "ani1.png", yazi: "İlk buluşmamız" },
  { foto: "ani2.png", yazi: "İlk araba çiğköfte date" },
  { foto: "ani3.png", yazi: "İlk anıtkabire gidişimiz" },
  { foto: "ani4.png", yazi: "İlk konser." },
  { foto: "ani5.png", yazi: "Tuzla sokaklarında" },
  { foto: "ani6.png", yazi: "İlk galata gezimiz." },
  { foto: "ani7.png", yazi: "Bana aşk ile bakmana bayılıyorum" }
];

const timeline = document.getElementById('timeline');
let current = 0;

function sonrakiAni() {
  if (current < anilar.length) {
    const ani = anilar[current];
    const div = document.createElement('div');
    div.className = 'memory';
    div.innerHTML = `
      <img src="/images/${ani.foto}" alt="Anı ${current + 1}">
      <p>❤️ ${ani.yazi}</p>
    `;
    timeline.appendChild(div);
    current++;
  } else {
    clearInterval(zamanlayici);
  }
}

let zamanlayici;

document.getElementById('playBtn').addEventListener('click', () => {
  const song = document.getElementById('loveSong');
  song.play();

  // İlk anıyı hemen göster
  sonrakiAni();

  // Sonrakileri her 3 saniyede bir
  zamanlayici = setInterval(sonrakiAni, 3000);
});