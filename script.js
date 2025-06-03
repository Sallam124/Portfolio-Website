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
