const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('first');
  dots[currentSlide].classList.remove('first');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('first');
  dots[currentSlide].classList.add('first');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

// Mudar slide a cada 5 segundos
setInterval(nextSlide, 5000);

// Adicionar funcionalidade aos pontos
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});