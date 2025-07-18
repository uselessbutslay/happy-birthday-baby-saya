document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('gameContent').classList.remove('hidden');
  document.getElementById('startBtn').classList.add('hidden');
  document.getElementById('question1').classList.remove('hidden');
});

document.querySelectorAll('.option').forEach(btn => {
  btn.addEventListener('click', () => {
    const isCorrect = btn.classList.contains('correct');
    if (isCorrect) {
      playSound('clapSound');
      launchConfetti();
      const next = btn.getAttribute('data-next');
      if (next) {
        document.querySelectorAll('.question').forEach(q => q.classList.add('hidden'));
        document.getElementById(next).classList.remove('hidden');
        if (next === 'loveMessage') showMessage();
      }
    } else {
      playSound('booSound');
      playSound('sirenSound');
      alert("Try again sayang 😢");
    }
  });
});

function playSound(id) {
  const sound = document.getElementById(id);
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

function launchConfetti() {
  for (let i = 0; i < 20; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (Math.random() * 2 + 1) + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

function showMessage() {
  const lines = [
    "💌 Love Letter for Ilman 💌",
    "",
    "Dear Ilman,",
    "",
    "I wish you nothing but the best in life — to win, to grow, to be happy in everything you do.",
    "Thank you for coming this far, for never giving up.",
    "I’m so, so proud of you, baby.",
    "I’ve never once gotten tired of telling you how proud I am of you — because I want you to really know it.",
    "You’re doing amazing, and I see all your effort.",
    "",
    "Thank you for being such a good listener, a good advisor (my personal coach sksks 🤭),",
    "and thank you most of all for staying with me even at my lowest.",
    "(Saya sayang kamu banyak tau 🥺)",
    "",
    "Thank you for being the best son to your parents — I just know they must be so proud to have someone like you.",
    "Your siblings are lucky to have an abang they can rely on.",
    "And your kakak & abang must be proud too, knowing their little brother can handle so much, so well.",
    "",
    "Whatever happens, I’m here with you, baby.",
    "I can’t promise everything, but what I can say is… I’ll support you always, until you reach your dreams.",
    "I’ll always be cheering for you silently, always praying for you, even when I can’t be right next to you.",
    "",
    "Whenever you’re sick or sad, I really wish I could be there to take care of you.",
    "I want to hug you, to wipe away all your tiredness.",
    "But for now, all I can do is send you my love from afar —",
    "and pray that Allah keeps you strong, blesses your steps with goodness, endless rezeki, and always protects your heart.",
    "",
    "May one day, with all your effort and kindness, you make your parents proud —",
    "and always remember, I’m already proud of you.",
    "",
    "Gosh… I love this man so much it hurts. But in the most beautiful way. 🥹",
    "",
    "Baby, I know I’m the one you accidentally met.",
    "But I hope I can always be better — the kind of person you’ve always wished for.",
    "I’m still learning, in everything. And you are too.",
    "So let’s grow together, let’s be the best version of ourselves — for each other, okay sayang?",
    "",
    "I can’t even describe how much I’m proud to have you — as my boyfriend, and my best friend.",
    "Thank you, sayang, for being you.",
    "Good luck for your intern. No matter what the outcome is, I’m already so proud of you.",
    "",
    "I might not always know how to express it well, but deep down — I’m so, so proud of you, Ilman.",
    "",
    "Love always,",
    "Your Sayang 💙"
  ];

  const container = document.getElementById('messageContainer');
  container.innerHTML = '';

  lines.forEach((line, index) => {
    const p = document.createElement('p');
    p.textContent = line;
    p.classList.add('message-line');
    container.appendChild(p);
    setTimeout(() => {
      p.classList.add('show');
    }, index * 1500);
  });
}
