function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const texts = [
  "Software Developer",
  "Frontend Developer",
  "Machine Learning Developer",
  "Programmer",
  "Fitness Enthusiast",
  "Gamer" 
];

const typingSpeed = 100;
const deletingSpeed = 50;
const delayAfterTyping = 1500;

const element = document.querySelector('.section__text__p2');

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    element.textContent = currentText.substring(0, charIndex + 1) ;
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, delayAfterTyping);
      return;
    }
  } else {
    element.textContent = currentText.substring(0, charIndex - 1) ;
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

type();
function openGallery() {
  document.getElementById("screenshotModal").style.display = "block";
}
function closeGallery() {
  document.getElementById("screenshotModal").style.display = "none";
}

// --- Animation Utilities ---
window.addEventListener('DOMContentLoaded', () => {
  // Animate nav and profile image on load
  document.querySelector('nav').classList.add('slide-down');
  setTimeout(() => {
    document.querySelector('#profile .section__pic-container img').classList.add('animated');
  }, 400);
});

// Intersection Observer for sections
const observer = new window.IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Footer fade-in on scroll
const footer = document.querySelector('footer');
if (footer) {
  const footerObs = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  footerObs.observe(footer);
}

// --- Floating Particles in Hero Section ---
function startParticles() {
  const canvas = document.getElementById('particles-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h;
  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  // Weighted color array: black appears more frequently
  const colors = [
    '#000', '#000', '#000', '#000', '#000', // black (weight 5)
    '#00c3ff', // blue
    '#ff1c68', // pink
    '#ffff1c', // yellow
    '#00ffb3'  // green
  ];
  const particles = Array.from({length: 64}, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 1.5 + Math.random() * 2.5,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    alpha: 0.3 + Math.random() * 0.5,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    }
    requestAnimationFrame(draw);
  }
  draw();
}
window.addEventListener('DOMContentLoaded', startParticles);

// --- Project Card Hover Animation (no 3D tilt, buttons unaffected) ---
document.querySelectorAll('.details-container.color-container').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('project-hovered');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('project-hovered');
  });
});
