function openSeller(produto){
  const msg = `Olá! Gostaria de um orçamento para ${produto}`;

  document.getElementById('seller1').href =
    `https://wa.me/5544984443735?text=${encodeURIComponent(msg)}`;

  document.getElementById('seller2').href =
    `https://wa.me/5544991048359?text=${encodeURIComponent(msg)}`;

  document.getElementById('seller3').href =
    `https://wa.me/5544984543447?text=${encodeURIComponent(msg)}`;

  document.getElementById('sellerModal').classList.add('active');
}

function closeSeller(){
  document.getElementById('sellerModal').classList.remove('active');
}

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