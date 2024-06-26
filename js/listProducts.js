// listProducts.js

import { obtenerProductos, eliminarProducto  } from './api.js';

// Función para renderizar productos
async function renderizarProductos() {
    try {
        const productos = await obtenerProductos();
        const productGrid = document.querySelector('[data-product-list]');

        // Limpiamos el contenedor de productos antes de agregar nuevos
        productGrid.innerHTML = '';

        // Si no hay productos, mostramos el mensaje correspondiente
        const noProductsMessage = document.querySelector('.no-products-message');
        if (productos.length === 0) {
            noProductsMessage.style.display = 'block';
        } else {
            noProductsMessage.style.display = 'none';
        }

        // Recorremos la lista de productos y los agregamos al DOM
        productos.forEach(producto => {
            const productCard = document.createElement('div');
            productCard.classList.add('card');

            productCard.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" />
                <div class="card-container--info">
                    <p>${producto.nombre}</p>
                    <div class="card-container--value">
                        <p>$${producto.precio.toFixed(2)}</p>
                        <img src="assets/imagenes/basurero.png" alt="Eliminar" data-id="${producto.id}" class="eliminar-producto" />
                    </div>
                </div>
            `;

            productGrid.appendChild(productCard);
        });

        // Agregar manejadores de eventos para eliminar productos
        document.querySelectorAll('.eliminar-producto').forEach(button => {
            button.addEventListener('click', async (event) => {
                const productoId = event.target.getAttribute('data-id');
                try {
                    await eliminarProducto(productoId);
                    renderizarProductos(); // Recargar productos después de eliminar uno
                } catch (error) {
                    console.error('Error al eliminar el producto:', error);
                }
            });
        });

    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

// Inicializamos la carga de productos cuando se carga la página
document.addEventListener('DOMContentLoaded', renderizarProductos);
