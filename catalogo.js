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
