document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const images = track.querySelectorAll("img");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
 

  let index = 0;
  const visible = 3; // quantas imagens aparecem por vez

  function updateCarousel() {
    const imageWidth = images[0].offsetWidth + 20; // largura + gap
    track.style.transform = `translateX(-${index * imageWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < images.length - visible) {
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);
});


const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


