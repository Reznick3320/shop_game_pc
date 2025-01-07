document.querySelectorAll('.addToCartButton').forEach(button => {
  button.addEventListener('click', function() {
    const productId = this.getAttribute('data-product-id');
    const productName = this.getAttribute('data-product-name');
    const productPrice = parseFloat(this.getAttribute('data-product-price'));

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex > -1) { 
      cart[productIndex].quantity += 1;
    } else { 
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
 
    this.textContent = "Aggiunto al carrello";
    this.disabled = true;
 
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');
    const goToCartButton = document.getElementById('goToCartButton');

    modalMessage.textContent = `"${productName}" Aggiunto al carrello!`;
    modal.style.display = 'block';

    goToCartButton.addEventListener('click', function() {
      window.location.href = 'order.html';
    });
 
    const closeModal = modal.querySelector('.close');
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
 
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
 
  const productId = button.getAttribute('data-product-id');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const productInCart = cart.find(item => item.id === productId);
  if (productInCart) {
    button.textContent = "Aggiunto al carrello";
    button.disabled = true;  
  }
});
