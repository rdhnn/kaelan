const teksArray = [
  "..........",
  "apa kabar?? baik baik aja kann??",
  "gimana hari harinya? kangen nih dengerin kamu cerita",
  "dan juga....",
  "aku mau jujur.....",
  "aku bener bener gabisa lupain kamu",
  "tapi aku juga tau kalo kita gabisa balik lagi",
  "aku cuma mau bilang kalo aku sayang banget banget sama kamu",
];

let index = 0;

function gantiTeks() {
  index = (index + 1) % teksArray.length;
  document.getElementById("romantisText").textContent = teksArray[index];

  if (teksArray[index] === "aku cuma mau bilang kalo aku sayang banget banget sama kamu") {
    document.getElementById("gantiBtn").style.display = "none";
  }
}

const hearts = document.querySelector('.hearts');
for (let i = 0; i < 20; i++) {
  const heart = document.createElement('div');
  heart.textContent = '❤️';
  heart.style.position = 'absolute';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.top = `${Math.random() * -100}%`;
  heart.style.fontSize = `${Math.random() * 30 + 10}px`;
  heart.style.animation = `fall ${Math.random() * 5 + 3}s infinite linear`;
  heart.style.setProperty('--i', Math.random());
  hearts.appendChild(heart);
}






