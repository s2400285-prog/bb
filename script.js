const surpriseBox = document.getElementById("surpriseBox");
const surpriseContent = document.getElementById("surpriseContent");

function showSurprise(content) {
  surpriseContent.innerHTML = content;
  surpriseBox.classList.remove("show");

  // Restart the reveal animation
  void surpriseBox.offsetWidth;
  surpriseBox.classList.add("show");

  surpriseBox.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
}

function showMissing() {
  showSurprise(`
        <h2>Okay, honest moment... 💗</h2>
        <p>
            I miss you, Julie. No dramatic background music,
            no 50-page essay, just me admitting that I wish
            I could spend a little time with you right now.
        </p>
        <p style="margin-top:12px">
            If missing someone counted as exercise,
            I'd probably have abs by now. 😭 HAHAHA!
        </p>
        <p style="margin-top:12px">
            But seriously, I'm grateful that I get to know you.
            I hope I get to see your smile again soon. 🌷
        </p>
    `);

  bloomFlowers();
}

function showVerse() {
  showSurprise(`
        <h2>A little reminder from God 📖</h2>
        <p style="font-size:16px;color:#99539d">
            "We love him, because he first loved us."
        </p>
        <p><strong>1 John 4:19 (KJV)</strong></p>
        <p style="margin-top:14px">
            Julie, I hope you always remember that God's love
            comes first and that you are precious to Him.
            May He guide your heart, give you peace, and help
            you through whatever today brings. 🤍
        </p>
        <p style="margin-top:12px">
            Praying that your day is filled with His goodness
            and little reasons to smile. 🌸
        </p>
    `);

  bloomFlowers();
}

function showSecret() {
  showSurprise(`
        <h2>🤫 My little secret</h2>
        <p>
            Sometimes I see something funny and think,
            "I need to tell Julie this."
        </p>
        <p style="margin-top:12px">
            Then I realize I'm smiling at my phone again.
            Girl, what kind of software bug did you install
            in my brain? HAHAHAHA. 😭
        </p>
        <p style="margin-top:12px">
            Anyway, I wouldn't mind having more little
            moments with you. You're becoming one of my
            favorite parts of the day. ♡
        </p>
    `);

  bloomFlowers();
}

function closeSurprise() {
  surpriseBox.classList.remove("show");
}

function bloomFlowers() {
  const decorations = ["🌸", "🌷", "💗", "✨", "🌼", "💕"];

  for (let i = 0; i < 24; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent =
      decorations[Math.floor(Math.random() * decorations.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = 35 + Math.random() * 40 + "vh";
    petal.style.setProperty("--x", Math.random() * 300 - 150 + "px");
    petal.style.setProperty("--y", -100 - Math.random() * 250 + "px");
    petal.style.animationDelay = Math.random() * 0.6 + "s";

    document.body.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 3500);
  }
}

// Little floating hearts in the background
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "petal";
  heart.textContent = Math.random() > 0.5 ? "♡" : "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.setProperty("--x", Math.random() * 100 - 50 + "px");
  heart.style.setProperty("--y", "-110vh");
  heart.style.fontSize = 14 + Math.random() * 16 + "px";
  heart.style.animationDuration = 5 + Math.random() * 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 1200);
