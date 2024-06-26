// crearProducto.js

import { crearProducto } from './api.js'; // Importa la función para crear productos desde api.js

document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm'); // Obtiene el formulario por su ID

    if (productForm) {
        productForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Evita que se envíe el formulario automáticamente

            // Captura los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const precio = parseFloat(document.getElementById('precio').value); // Convierte el valor a número flotante
            const imagen = document.getElementById('imagen').value;

            // Crea un objeto con los datos del nuevo producto
            const nuevoProducto = {
                nombre,
                precio,
                imagen,
            };

            try {
                // Llama a la función para crear un nuevo producto en la API
                const productoCreado = await crearProducto(nuevoProducto);
                console.log('Producto creado:', productoCreado);

                // Lógica adicional si se desea (por ejemplo, limpiar el formulario, actualizar la lista de productos, etc.)
                productForm.reset(); // Resetea el formulario después de enviar

                // Opcional: Puedes añadir lógica para mostrar un mensaje de éxito o actualizar la lista de productos

            } catch (error) {
                console.error('Error al crear el producto:', error);
                // Manejar el error de acuerdo a los requisitos de tu aplicación
            }
        });
    } else {
        console.error('No se encontró el formulario de productos.');
    }
});
