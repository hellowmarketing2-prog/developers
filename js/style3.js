const container = document.getElementById("snake-bg");
const segments = [];
const totalSegments = 14;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let angle = 0;
let hue = 0;

for (let i = 0; i < totalSegments; i++) {
  const seg = document.createElement("div");
  seg.className = "segment";
  container.appendChild(seg);
  segments.push({ el: seg, x: mouseX, y: mouseY });
}

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  angle += 0.15;
  hue += 1;

  segments[0].x += (mouseX + Math.sin(angle) * 40 - segments[0].x) * 0.2;
  segments[0].y += (mouseY + Math.cos(angle) * 40 - segments[0].y) * 0.2;

  for (let i = 1; i < segments.length; i++) {
    segments[i].x += (segments[i - 1].x - segments[i].x) * 0.3;
    segments[i].y += (segments[i - 1].y - segments[i].y) * 0.3;
  }

  segments.forEach((s, i) => {
    s.el.style.transform =
      `translate(${s.x}px, ${s.y}px)`;
    s.el.style.backgroundColor =
      `hsl(${hue + i * 15}, 100%, 50%)`;
  });

  requestAnimationFrame(animate);
}

animate();



const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
  toggleBtn.innerText = savedTheme === "light"
    ? "🌙 Dark Mode"
    : "☀ Light Mode";
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "light") {
    body.setAttribute("data-theme", "dark");
    toggleBtn.innerText = "☀ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
    toggleBtn.innerText = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});




















const colors = ['#00ffff', '#00ff99', '#66ffcc', '#33ccff'];
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const container = card.querySelector('.raindrops');

  for (let i = 0; i < 80; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = Math.random() * 100 + '%';
    const size = 4 + Math.random() * 6;
    drop.style.width = drop.style.height = size + 'px';
    drop.style.animationDuration = (0.8 + Math.random() * 2.5) + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    drop.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(drop);

    drop.addEventListener('animationiteration', () => {
      const splash = document.createElement('div');
      splash.classList.add('splash');
      splash.style.left = drop.style.left;
      splash.style.bottom = '0px';
      splash.style.backgroundColor = drop.style.backgroundColor;
      container.appendChild(splash);
      setTimeout(() => splash.remove(), 500);
    });
  }

  // Hover tilt
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    card.style.transform = `rotateY(${deltaX * 12}deg) rotateX(${-deltaY * 12}deg) scale(1.05)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  });
});

// Scroll fade-in + rotate + upward motion
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0) rotateX(0deg)';
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.transform = 'translateY(50px) rotateX(30deg)';
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// Optional: Scroll parallax tilt for cinematic effect
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  cards.forEach((card, idx) => {
    card.style.transform += ` rotateZ(${scrollTop * 0.05}deg)`;
  });
});
































// const cards = document.querySelectorAll('.card');
// let lastScroll = window.scrollY;

// Scroll-triggered animation one by one
// function animateCards() {
//   const direction = window.scrollY > lastScroll ? 'down' : 'up';
//   lastScroll = window.scrollY;

//   cards.forEach((card, i) => {
//     setTimeout(() => {
//       card.style.opacity = 1;
//       card.style.transform = 'translateY(0px) scale(1) rotateX(0deg) rotateY(0deg)';
//     }, i * 150);
//   });
// }

// Always trigger on scroll
// window.addEventListener('scroll', animateCards);

// Hover effect
// cards.forEach(card => {
//   card.addEventListener('mouseenter', () => card.classList.add('hover-effect'));
//   card.addEventListener('mouseleave', () => card.classList.remove('hover-effect'));
// });

















