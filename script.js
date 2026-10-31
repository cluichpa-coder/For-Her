const CONFIG = {
  herName: "Luichpa",
  nickname: "BachHi",
  myName: "[MY NAME]",
  birthdayDate: "2026-11-17T00:00:00+05:45",
  birthdayMessage:
    "I wish I could be beside you today, celebrating every little moment with you. But until that day comes, I hope this little surprise reminds you how special you are to me. May your new year be filled with happiness, beautiful memories, endless blessings, and everything your heart wishes for.",
  letterParagraphs: [
    "Dear Luichpa, my BachHi,",
    "There are moments in life that feel so simple, yet stay with us for a very long time. You are one of those moments for me. You are the calm in my busy days, the warmth in my thoughts, and the beautiful kind of happiness I never expected to find from so far away.",
    "Our relationship has taught me that distance is only a number. It can stretch between two places, but it can never truly separate two hearts that care so deeply. Even when we are apart, you are still a real and important part of my everyday life. I carry your smile in my mind, your voice in my heart, and your love in every dream I have.",
    "I miss you more than I can explain, especially on days when I wish I could just sit beside you, laugh with you, and make the little memories that only two people in love can make. I think about all the times we have shared, the sweet messages, the laughter, the comfort, and the way you make even ordinary days feel warmer and brighter.",
    "Today, on your birthday, I want you to know how deeply special you are to me. You are kind, beautiful, thoughtful, and full of a light that makes people around you feel better just by being near you. I hope you always remember how loved you are, not just today, but every single day.",
    "I hope this new year brings you happiness in the quiet moments, peace in your heart, and the kind of joy that stays with you long after the day ends. I hope your dreams grow bigger, your smile stays brighter, and your life is filled with people who appreciate the wonderful person you are.",
    "I wish I could celebrate beside you today, with a cake, a hug, and all the little things that make a birthday feel complete. Until then, I hope this small surprise reminds you of how much you mean to me and how much I am grateful to have you in my life.",
    "Happy birthday, my love. You deserve all the beautiful things in this world, and I hope to spend many more beautiful days making memories with you."
  ],
  memories: [
    { title: "Our first hello", caption: "The beginning of something beautiful, the moment my heart quietly started choosing you in a way I can never explain." },
    { title: "Late-night talks", caption: "Those soft conversations and warm feelings made the distance feel smaller and my love for you feel even deeper." },
    { title: "Little moments", caption: "The tiny everyday memories became the sweetest part of us, the ones I keep replaying in my heart when I miss you." },
    { title: "Your smile", caption: "The kind of smile that makes ordinary days feel brighter and turns even my quietest thoughts into happiness." },
    { title: "Our dreams", caption: "The future we keep imagining, the life we hope to build, and the beautiful journey we still have waiting for us." },
    { title: "Happy surprises", caption: "Every little surprise, every thoughtful gesture, every sweet message—each one became a beautiful reminder that love can travel across distance." },
    { title: "Good memories", caption: "Comfort, warmth, laughter, and tender moments all wrapped together into the kind of memories that stay forever." },
    { title: "Your voice", caption: "The sweetest sound I still carry in my heart, the voice that makes my whole world feel calm and full of love." },
    { title: "Our favorite days", caption: "The times that made me fall even deeper, the ones I replay with a smile because you were in them." },
    { title: "The future", caption: "The days I hope we will share side by side, making new memories and writing a love story that lasts a lifetime." }
  ],
  reasons: [
    { title: "Your beautiful smile", text: "It has the power to make my hardest days feel lighter and my heart feel instantly calm and full of joy." },
    { title: "Your caring heart", text: "You make people feel seen, safe, and deeply loved, and I admire that gentle kindness in you more than words can say." },
    { title: "The little ways you make me happy", text: "The simple things you do or say turn ordinary moments into the kind of memories I want to hold onto forever." },
    { title: "The happiness you bring", text: "You carry a quiet warmth and soft light that makes every space around you feel gentler, brighter, and more beautiful." },
    { title: "The memories we share", text: "Even the smallest ones feel special because they are filled with you, your love, and the beautiful energy you bring into my life." },
    { title: "Simply being yourself", text: "That is the reason your love feels so real, so comforting, and so precious to me every single day." }
  ],
  photoPaths: [
    "images/1069323505267662539.jpg",
    "images/1082482460448363552.jpg",
    "images/610800768247131319.jpg",
    "images/642114859418445689.jpg",
    "images/713609503494261929.jpg",
    "images/764345368050173751.jpg",
    "images/791718809539765410.jpg",
    "images/945122671798082750.jpg",
    "images/dudu love bubu Cute Cat Aesthetic Video _ Adorable Kitten Moments 🐾.jpg",
    "images/i love you so much ❤️👥👻💋.jpg"
  ],
  musicPath: "music/Christina_Perri_-_A_Thousand_Years_CeeNaija.com_.mp3"
};

const sections = Array.from(document.querySelectorAll("[data-section]"));
const progressFill = document.getElementById("progressFill");
const loader = document.getElementById("loader");
const birthdayLockState = document.getElementById("birthdayLockState");
const birthdayUnlock = document.getElementById("birthdayUnlock");
const birthdayClick = document.getElementById("birthdayClick");
const envelope = document.getElementById("envelope");
const letterCard = document.getElementById("letterCard");
const letterText = document.getElementById("letterText");
const galleryGrid = document.getElementById("galleryGrid");
const memoryList = document.getElementById("memoryList");
const reasonCards = document.getElementById("reasonCards");
const floatingMessages = document.getElementById("floatingMessages");
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");
const volumeControl = document.getElementById("volumeControl");
const cursor = document.getElementById("cursor");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cakeButton = document.getElementById("cakeButton");
const birthdayMessage = document.getElementById("birthdayMessage");
const birthdayTitle = document.getElementById("birthdayTitle");
const birthdaySubtitle = document.getElementById("birthdaySubtitle");
const restartButton = document.getElementById("restartButton");

let currentSectionIndex = 0;
let countdownValues = { days: "00", hours: "00", minutes: "00", seconds: "00" };
let musicPlaying = false;

function updateProgress() {
  const percent = ((currentSectionIndex + 1) / sections.length) * 100;
  progressFill.style.width = `${percent}%`;
}

function showSection(index) {
  currentSectionIndex = Math.max(0, Math.min(index, sections.length - 1));
  sections.forEach((section, sectionIndex) => {
    section.classList.toggle("active", sectionIndex === currentSectionIndex);
  });
  updateProgress();
  prevBtn.style.opacity = currentSectionIndex === 0 ? "0.5" : "1";
  nextBtn.style.opacity = currentSectionIndex === sections.length - 1 ? "0.5" : "1";
  if (window.innerWidth <= 900) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function attachSectionButtons() {
  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.scroll;
      const index = sections.findIndex((section) => section.id === target);
      if (index >= 0) {
        showSection(index);
      }
    });
  });

  prevBtn.addEventListener("click", () => {
    showSection(currentSectionIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    showSection(currentSectionIndex + 1);
  });
}

function updateCountdown() {
  const target = new Date(CONFIG.birthdayDate).getTime();
  const now = Date.now();
  let diff = target - now;

  if (diff < 0) {
    diff = 0;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const values = {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0")
  };

  Object.entries(values).forEach(([key, value]) => {
    const element = document.getElementById(key);
    if (element && countdownValues[key] !== value) {
      element.textContent = value;
      element.animate(
        [
          { transform: "scale(1)", opacity: 1 },
          { transform: "scale(1.15)", opacity: 0.8 },
          { transform: "scale(1)", opacity: 1 }
        ],
        { duration: 450, easing: "ease-out" }
      );
      countdownValues[key] = value;
    }
  });
}

function getDisplayName() {
  return `${CONFIG.herName} (${CONFIG.nickname})`;
}

function updateBirthdayHeader() {
  if (birthdayTitle) {
    birthdayTitle.textContent = `HAPPY BIRTHDAY, ${CONFIG.herName.toUpperCase()}, MY LOVE! ❤️`;
  }

  if (birthdaySubtitle) {
    birthdaySubtitle.textContent = `Today, the world celebrates the day someone incredibly special was born — my ${CONFIG.nickname}.`;
  }
}

function setUpLetter() {
  const formatted = CONFIG.letterParagraphs.map((paragraph) => {
    const safeParagraph = paragraph
      .replaceAll("[HER NAME]", CONFIG.herName)
      .replaceAll("[MY NAME]", CONFIG.myName)
      .replaceAll("Luichpa", CONFIG.herName);
    return `<p>${safeParagraph}</p>`;
  }).join("");

  letterText.innerHTML = formatted;

  envelope.addEventListener("click", () => {
    envelope.classList.add("open");
    letterCard.classList.add("visible");
  });

  envelope.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      envelope.click();
    }
  });
}

function createLightbox() {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox hidden";
  lightbox.innerHTML = `
    <div class="lightbox-inner">
      <button type="button" class="lightbox-close" aria-label="Close image">×</button>
      <img src="" alt="Memory preview" />
    </div>
  `;
  document.body.appendChild(lightbox);

  const image = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector(".lightbox-close");

  const openImage = (src, title) => {
    image.src = src;
    image.alt = title;
    lightbox.classList.remove("hidden");
  };

  closeButton.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.add("hidden");
    }
  });

  return openImage;
}

function setUpGallery() {
  galleryGrid.innerHTML = CONFIG.photoPaths.map((photo) => {
    return `
      <figure class="memory-card" data-src="${photo}" data-title="${CONFIG.herName}">
        <img src="${photo}" alt="A photo of ${CONFIG.herName}" />
      </figure>
    `;
  }).join("");

  const openLightbox = createLightbox();
  galleryGrid.querySelectorAll(".memory-card").forEach((card) => {
    card.addEventListener("click", () => {
      openLightbox(card.dataset.src, card.dataset.title);
    });
  });

  memoryList.innerHTML = CONFIG.memories.slice(0, 7).map((memory) => `
    <li><strong>${memory.title}</strong>: ${memory.caption}</li>
  `).join("");
}

function setUpReasons() {
  reasonCards.innerHTML = CONFIG.reasons.map((reason, index) => `
    <article class="reason-card" style="animation-delay:${index * 120}ms;">
      <h3>${reason.title}</h3>
      <p>${reason.text}</p>
    </article>
  `).join("");
}

function setUpGiftBoxes() {
  const giftOptions = {
    sweet: {
      title: "Sweet Message",
      message: "My favorite part of life is the way you make my heart feel at home, even from far away. You are my sweetest love story."
    },
    wish: {
      title: "Special Wish",
      message: "May your life always be full of laughter, beautiful memories, gentle peace, and the kind of love that keeps growing every day."
    },
    secret: {
      title: "Secret Message",
      message: "Psst... you are my forever favorite person, and I will always choose you in every beautiful chapter of life."
    }
  };

  document.querySelectorAll(".gift-box").forEach((gift) => {
    const detail = giftOptions[gift.dataset.gift];
    if (!detail) return;

    const note = document.createElement("span");
    note.className = "gift-note";
    note.textContent = `${getDisplayName()}, ${detail.message}`;
    gift.appendChild(note);
    gift.setAttribute("aria-expanded", "false");

    gift.addEventListener("click", () => {
      const isOpen = gift.classList.toggle("open");
      gift.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) {
        const bounds = gift.getBoundingClientRect();
        createBurstHeart(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2);
      }
    });
  });
}

function createBurstHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "burst-heart";
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1200);
}

function setUpBirthdayCake() {
  cakeButton.addEventListener("click", () => {
    cakeButton.classList.add("ignite");
    birthdayMessage.textContent = `Happy birthday, ${getDisplayName()}! I wish I could be beside you today, celebrating every little moment with you. Until then, may your day be filled with love, laughter, and beautiful memories.`;
    triggerConfetti();
    setTimeout(() => {
      cakeButton.classList.remove("ignite");
    }, 1200);
  });
}

function startBirthdayCelebration() {
  birthdayLockState.classList.add("hidden");
  birthdayUnlock.classList.remove("hidden");
  cakeButton.classList.add("ignite");
  triggerConfetti();
  triggerSparkles();
  setTimeout(() => cakeButton.classList.remove("ignite"), 1800);
}

function triggerConfetti() {
  const container = document.createElement("div");
  container.className = "confetti-layer";
  for (let i = 0; i < 34; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = ["#FFB6D5", "#DCC7FF", "#FF6FAE", "#FFD166"][Math.floor(Math.random() * 4)];
    piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 180}px`);
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    container.appendChild(piece);
  }
  document.body.appendChild(container);
  setTimeout(() => container.remove(), 2500);
}

function triggerSparkles() {
  const layer = document.createElement("div");
  layer.className = "sparkle-layer";
  for (let i = 0; i < 42; i += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = i % 5 === 0 ? "celebration-light" : "celebration-sparkle";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.setProperty("--sparkle-delay", `${Math.random() * 0.8}s`);
    sparkle.style.setProperty("--sparkle-size", `${6 + Math.random() * 16}px`);
    layer.appendChild(sparkle);
  }
  document.body.appendChild(layer);
  setTimeout(() => layer.remove(), 2600);
}

function spawnLoveMessage() {
  const messages = [
    "You are my favorite person.",
    "Always and forever.",
    "Your smile is my sunshine.",
    "My heart thinks of you first.",
    "You make life feel magical.",
    "Every day with you is a treasure.",
    "Love you more than words.",
    "Dreaming of us, always."
  ];

  const message = document.createElement("div");
  message.className = "floating-message";
  message.textContent = messages[Math.floor(Math.random() * messages.length)];
  message.style.left = `${Math.random() * 70 + 15}%`;
  message.style.top = `${Math.random() * 68 + 12}%`;
  floatingMessages.appendChild(message);
  setTimeout(() => message.remove(), 4000);
}

function setUpRandomMessages() {
  setInterval(spawnLoveMessage, 4500);
}

function setUpMusic() {
  const savedState = localStorage.getItem("birthdaySongState");
  if (savedState === "playing") {
    musicPlaying = false;
    musicToggle.textContent = "❚❚";
  }

  try {
    bgMusic.src = CONFIG.musicPath;
  } catch (error) {
    console.warn("Audio path is not available yet:", error);
  }

  musicToggle.addEventListener("click", async () => {
    if (musicPlaying) {
      bgMusic.pause();
      musicPlaying = false;
      localStorage.setItem("birthdaySongState", "paused");
      musicToggle.textContent = "▶";
      return;
    }

    try {
      await bgMusic.play();
      musicPlaying = true;
      localStorage.setItem("birthdaySongState", "playing");
      musicToggle.textContent = "❚❚";
    } catch (error) {
      console.warn("Music could not start until user interaction:", error);
    }
  });

  volumeControl.addEventListener("input", () => {
    bgMusic.volume = Number(volumeControl.value) / 100;
  });

  bgMusic.volume = Number(volumeControl.value) / 100;
}

function addPageClickHearts() {
  document.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button") || event.target.closest(".memory-card") || event.target.closest(".gift-box")) {
      return;
    }
    createBurstHeart(event.clientX, event.clientY);
  });
}

function setUpCursor() {
  window.addEventListener("pointermove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  document.addEventListener("pointerdown", () => cursor.classList.add("grow"));
  document.addEventListener("pointerup", () => cursor.classList.remove("grow"));
}

function markCharacterReactions() {
  const friendlyTargets = [
    document.querySelector(".scene-bunny"),
    document.querySelector(".scene-teddy"),
    document.querySelector(".letter-teddy"),
    document.querySelector(".final-character.left"),
    document.querySelector(".final-character.right")
  ].filter(Boolean);

  friendlyTargets.forEach((target) => {
    target.addEventListener("click", () => {
      const message = ["I love you.", "You are my favorite person.", "Always smiling for you.", "Little heart for you.", "You are my magic."][Math.floor(Math.random() * 5)];
      const pop = document.createElement("div");
      pop.className = "floating-message";
      pop.textContent = message;
      const rect = target.getBoundingClientRect();
      pop.style.left = `${rect.left + rect.width / 2}px`;
      pop.style.top = `${rect.top}px`;
      document.body.appendChild(pop);
      setTimeout(() => pop.remove(), 2200);
    });
  });
}

function setUpRestart() {
  restartButton.addEventListener("click", () => {
    showSection(0);
  });
}

function initialize() {
  updateBirthdayHeader();
  setUpLetter();
  setUpGallery();
  setUpReasons();
  setUpGiftBoxes();
  setUpBirthdayCake();
  birthdayClick.addEventListener("click", startBirthdayCelebration);
  setUpRandomMessages();
  setUpMusic();
  setUpCursor();
  addPageClickHearts();
  markCharacterReactions();
  setUpRestart();
  attachSectionButtons();
  updateCountdown();
  updateProgress();

  setInterval(updateCountdown, 1000);

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1400);
}

window.addEventListener("DOMContentLoaded", initialize);
