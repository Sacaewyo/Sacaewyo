// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

// Typewriter effect
const textElement = document.querySelector('.typewriter-effect');
const phrases = ["Bienvenido a mi portafolio", "Desarrollador Web", "Apasionado por el código"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        charIndex--;
        textElement.textContent = currentPhrase.substring(0, charIndex);
    } else {
        charIndex++;
        textElement.textContent = currentPhrase.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});
