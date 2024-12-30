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
 
    const parentDiv = this.parentElement;
    parentDiv.innerHTML = `
      <button class="btn goToCartButton">Vai al carrello</button>
    `;
 
    parentDiv.querySelector('.goToCartButton').addEventListener('click', function() {
      window.location.href = 'order.html';
    });

    alert(`"${productName}" Aggiunto al carrello!`);
  });
});