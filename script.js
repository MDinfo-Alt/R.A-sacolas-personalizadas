document.addEventListener('DOMContentLoaded', function () {

  // ===== CARROSSEL =====
  const track = document.querySelector('.carousel-track');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  if (track && prev && next) {
    let index = 0;

    function showSlide(i) {
      const slides = document.querySelectorAll('.carousel-track img');
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(${-index * 100}%)`;
    }

    prev.addEventListener('click', () => showSlide(index - 1));
    next.addEventListener('click', () => showSlide(index + 1));

    setInterval(() => showSlide(index + 1), 5000);
  }


});
