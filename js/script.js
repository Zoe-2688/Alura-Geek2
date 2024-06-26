document.addEventListener('DOMContentLoaded', function() {
  const productList = document.querySelector('[data-product-list]');
  const noProductsMessage = document.querySelector('.no-products-message');

  // Comprueba si hay productos en la lista
  if (productList.children.length === 0) {
      noProductsMessage.style.display = 'block';
  } else {
      noProductsMessage.style.display = 'none';
  }
});
